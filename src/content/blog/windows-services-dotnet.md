---
title: "Servicios de Windows con .NET"
summary: "Descubre cómo crear, configurar y desplegar Servicios de Windows robustos utilizando .NET y Worker Services."
createdAt: 2025-12-14
---

# Servicios de Windows con .NET

## ¿Qué es un servicio de Windows?

Un Servicio de Windows es una aplicación que se ejecuta en segundo plano en un sistema operativo Windows. A diferencia de un programa normal que requiere la interacción de un usuario, un servicio no tiene interfaz gráfica. Está diseñado para funcionar de forma continua e ininterrumpida, iniciando automáticamente cuando el sistema se enciende y deteniéndose únicamente cuando este se apaga.

## ¿Por qué debemos usar servicios de Windows?

- **Ejecución en segundo plano:** Permite ejecutar tareas de larga duración sin que un usuario esté autenticado.
- **Confiabilidad y estabilidad:** Puede configurarse para iniciarse automáticamente tras un reinicio del sistema.
- **Aislamiento y seguridad:** Se ejecuta en un contexto separado del usuario actual, pudiendo acceder a recursos de red o ejecutar tareas administrativas sin comprometer la seguridad.
- **Manejo de recursos:** Permite controlar cómo y cuándo se inicia o detiene, además de asignar permisos específicos.

## Instrucciones para crear un servicio de Windows en .NET

1. Creamos un proyecto Worker Service:

```bash
dotnet new worker -n MiWorkerService
```

2. Instalamos el paquete necesario para ejecutar como servicio de Windows:

```bash
dotnet add package Microsoft.Extensions.Hosting.WindowsServices
```

3. Modificamos el **Program.cs** y registramos los servicios a utilizar con **Dependency Injection**:

```csharp
using Microsoft.Extensions.Logging;

var host = Host.CreateDefaultBuilder(args)
    .UseWindowsService(options =>
    {
        options.ServiceName = "ServiceName";
    })
    .ConfigureServices((hostContext, services) =>
    {
        services.AddHostedService<Worker>();

        services.AddTransient<IExampleOne, ExampleOne>();
        services.AddTransient<IExampleTwo, ExampleTwo>();

        services.AddLogging(logging =>
        {
            logging.AddEventLog();
        });
    })
    .Build();

host.Run();
```

4. Ejemplo de implementación dentro del **Worker.cs**:

```csharp
protected override async Task ExecuteAsync(CancellationToken stoppingToken)
{
    while (!stoppingToken.IsCancellationRequested)
    {
        // TODO: Lógica en segundo plano
        await Task.Delay(5000, stoppingToken);
    }
}
```

5. Agregamos **`<OutputType>WinExe</OutputType>`** en el **.csproj** para evitar que se abra una consola al iniciar el servicio:

```xml
<PropertyGroup>
  <TargetFramework>net8.0</TargetFramework>
  <Nullable>enable</Nullable>
  <ImplicitUsings>enable</ImplicitUsings>
  <OutputType>WinExe</OutputType> <!-- Agregar aquí -->
</PropertyGroup>
```

6. Publicamos el ejecutable en modo Release:

```bash
dotnet publish -c Release -o ./publish
```

Esto generará la carpeta **publish** con los archivos necesarios para instalar el servicio en Windows.

7. Instalamos el servicio desde PowerShell (como administrador). Se recomienda que no haya espacios en blanco dentro de la ruta del ejecutable:

```powershell
New-Service -Name "ServiceName" -BinaryPathName "C:\Services\ServiceName\ServiceName.exe" -StartupType Automatic
```

8. Para desinstalar el servicio:

```powershell
Remove-Service -Name "ServiceName"
```
