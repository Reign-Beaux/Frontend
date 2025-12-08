import styles from "../Articles.module.scss";

export const WindowsServices = () => {
  return (
    <article className={styles.articleContainer}>
      <h1 className={styles.articleTitle}>Servicios de Windows con .NET</h1>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>¿Qué es un servicio de Windows?</h2>
        <p>
          Un Servicio de Windows es una aplicación que se ejecuta en segundo plano en un sistema operativo
          Windows. A diferencia de un programa normal que requiere la interacción de un usuario, un servicio
          no tiene interfaz gráfica. Está diseñado para funcionar de forma continua e ininterrumpida,
          iniciando automáticamente cuando el sistema se enciende y deteniéndose únicamente cuando este se
          apaga.
        </p>
      </section>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>¿Por qué debemos usar servicios de Windows?</h2>
        <ul>
          <li>
            <strong>Ejecución en segundo plano:</strong> Permite ejecutar tareas de larga duración sin que un
            usuario esté autenticado.
          </li>
          <li>
            <strong>Confiabilidad y estabilidad:</strong> Puede configurarse para iniciarse automáticamente
            tras un reinicio del sistema.
          </li>
          <li>
            <strong>Aislamiento y seguridad:</strong> Se ejecuta en un contexto separado del usuario actual,
            pudiendo acceder a recursos de red o ejecutar tareas administrativas sin comprometer la seguridad.
          </li>
          <li>
            <strong>Manejo de recursos:</strong> Permite controlar cómo y cuándo se inicia o detiene, además
            de asignar permisos específicos.
          </li>
        </ul>
      </section>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>Instrucciones para crear un servicio de Windows en .NET</h2>
        <ul>
          <li>
            Creamos un proyecto Worker Service:
            <pre>
              <code>dotnet new worker -n MiWorkerService</code>
            </pre>
          </li>

          <li>
            Instalamos el paquete necesario para ejecutar como servicio de Windows:
            <pre>
              <code>dotnet add package Microsoft.Extensions.Hosting.WindowsServices</code>
            </pre>
          </li>

          <li>
            Modificamos el <strong>Program.cs</strong> y registramos los servicios a utilizar con
            <strong> Dependency Injection</strong>:
            <pre>
              <code>
                {`
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
`}
              </code>
            </pre>
          </li>

          <li>
            Ejemplo de implementación dentro del <strong>Worker.cs</strong>:
            <pre>
              <code>
                {`
protected override async Task ExecuteAsync(CancellationToken stoppingToken)
{
    while (!stoppingToken.IsCancellationRequested)
    {
        // TODO: Lógica en segundo plano
        await Task.Delay(5000, stoppingToken);
    }
}
`}
              </code>
            </pre>
          </li>

          <li>
            Agregamos <strong>{"<OutputType>WinExe</OutputType>"}</strong> en el <strong>.csproj</strong> para
            evitar que se abra una consola al iniciar el servicio:
            <pre>
              <code>
                {`
<PropertyGroup>
  <TargetFramework>net8.0</TargetFramework>
  <Nullable>enable</Nullable>
  <ImplicitUsings>enable</ImplicitUsings>
  <OutputType>WinExe</OutputType> <!-- Agregar aquí -->
</PropertyGroup>
`}
              </code>
            </pre>
          </li>

          <li>
            Publicamos el ejecutable en modo Release:
            <pre>
              <code>dotnet publish -c Release -o ./publish</code>
            </pre>
            Esto generará la carpeta <strong>publish</strong> con los archivos necesarios para instalar el
            servicio en Windows.
          </li>

          <li>
            Instalamos el servicio desde PowerShell (como administrador). Se recomienda que no haya espacios
            en blanco dentro de la ruta del ejecutable:
            <pre>
              <code>
                {`New-Service -Name "ServiceName" -BinaryPathName "C:\\Services\\ServiceName\\ServiceName.exe" -StartupType Automatic`}
              </code>
            </pre>
          </li>

          <li>
            Para desinstalar el servicio:
            <pre>
              <code>{`Remove-Service -Name "ServiceName"`}</code>
            </pre>
          </li>
        </ul>
      </section>
    </article>
  );
};
