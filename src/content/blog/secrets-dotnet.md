---
title: "Secretos de Usuario y Variables de Entorno en proyectos .NET"
summary: "Aprende a manejar información sensible en tus proyectos .NET de forma segura utilizando User Secrets y Variables de Entorno."
createdAt: 2025-12-14
---

# Secretos de Usuario y Variables de Entorno en proyectos .NET

## ¿Qué son los User Secrets?

Los User Secrets (Secretos de usuario) son una funcionalidad diseñada para almacenar datos sensibles durante el desarrollo local sin exponerlos a tu repositorio de código fuente.

## ¿Qué hacen y para qué sirven?

1. Almacenan información sensible como contraseñas o claves API de forma segura durante el desarrollo local.
2. Evitan que dichos datos se suban accidentalmente a tu repositorio de código fuente (Git).
3. Proporcionan una capa adicional de seguridad al no exponer información sensible en el código fuente.

**Importante**: Los User Secrets no están encriptados y existen como texto plano en tu máquina. Esto significa que otros usuarios que accedan a tu perfil del usuario podrían leerlos.

## ¿Qué son las variables de entorno?

Las variables de entorno son valores que se definen en el sistema operativo y pueden ser leídos por las aplicaciones durante su ejecución. Son útiles para almacenar configuraciones sensibles como contraseñas o claves API, evitando exponerlas directamente en el código fuente.

## ¿Qué hacen y para qué sirven?

1. Permiten separar la configuración sensible del código fuente, mejorando la seguridad de la aplicación.
2. Facilitan la gestión de configuraciones diferentes para distintos entornos (desarrollo, producción, etc.) sin modificar el código.
3. Son accesibles por cualquier aplicación que se ejecute en el sistema, lo que las hace versátiles para diferentes escenarios.

## Configuración y uso de User Secrets

1. En nuestro Program.cs y lo único que debemos hacer es lo siguiente después de definir en builder:

```csharp
var builder = WebApplication.CreateBuilder(args);
// Configuración de Variables de entorno, Secretos de usuarios y appsettings.json
builder.Configuration
        .SetBasePath(Directory.GetCurrentDirectory())
        .AddEnvironmentVariables()
        .AddUserSecrets<Program>()
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true);
```

2. Inicializamos los User Secrets en nuestro proyecto con el siguiente comando:

```bash
dotnet user-secrets init
```

3. Para saber si un proyecto ya fue configurado con User Secrets debemos revisar el archivo .csproj y verificar que contenga una línea similar a esta:

```xml
<UserSecretsId>your-guid-here</UserSecretsId>
```

4. Agregamos una clave-valor a los User Secrets con el siguiente comando:

```bash
dotnet user-secrets set "MiClaveSecreta" "ValorSecreto"
```

En formato JSON esto se vería así:

```json
{
  "MiClaveSecreta": "ValorSecreto"
}
```

5. Para agregar una clave-objecto:

```bash
dotnet user-secrets set "ConnectionStrings:FirstDataBase" "FirstPassword"
dotnet user-secrets set "ConnectionStrings:SecondDataBase" "SecondPassword"
```

En formato JSON esto se vería así:

```json
{
  "ConnectionStrings": {
    "FirstDataBase": "FirstPassword",
    "SecondDataBase": "SecondPassword"
  }
}
```

6. Para agregar una clave-arreglo:

```bash
dotnet user-secrets set "AllowedHosts:0" "localhost"
dotnet user-secrets set "AllowedHosts:1" "mydomain.com"
```

En formato JSON esto se vería así:

```json
{
  "AllowedHosts": [
    "localhost",
    "mydomain.com"
  ]
}
```

7. Para ver todos los User Secrets almacenados:

```bash
dotnet user-secrets list
```

8. Para eliminar un User Secret específico:

```bash
dotnet user-secrets remove "MiClaveSecreta"
```

## Configuración de las variables de entorno

1. En Windows, puedes establecer 2 tipos de variables de entorno, abriendo una terminal de PowerShell o CMD como administrador y ejecutando el siguiente comando:

```powershell
setx MiVariableEntorno "ValorDeMiVariable" /M
```

El modificador `/M` indica que la variable se establece a nivel del sistema. Si lo omites, la variable se establecerá solo para el usuario actual.

2. La sintaxis para definir las variables de entorno son similares a definirlos en los Secrets, la diferencia es que no usamos comillas dobles, sino, en su lugar usamos dos guines bajos para representar los niveles de jerarquía.

```powershell
setx ConnectionStrings__FirstDataBase "FirstPassword" /M
setx ConnectionStrings__SecondDataBase "SecondPassword" /M
```

Tambien podemos definir arreglos de la siguiente manera:

```powershell
setx AllowedHosts__0 "localhost" /M
setx AllowedHosts__1 "mydomain.com" /M
```

3. Para ver las variables de entorno definidas en Windows, puedes usar el siguiente comando en PowerShell:

```powershell
Get-ChildItem Env:
```

## ¿Y ahora que hago al desplegar?

La configuración aplicada en el Program.cs permite que tu aplicación lea las variables de entorno configuradas en el servidor así que no debemos hacer otra cosa por esa parte. Sin embargo dependiendo del proveedor que uses para desplegar tu aplicación, la forma de configurar las variables de entorno puede variar. Y eso lo debes revisar en la documentación del proveedor que uses.
