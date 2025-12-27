import styles from "../Articles.module.scss";

export const Secrets = () => {
  return (
    <article className={styles.articleContainer}>
      <h1 className={styles.articleTitle}>Secretos de Usuario y Variables de Entorno en proyectos .NET</h1>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>¿Qué son los User Secrets?</h2>
        <p>
          Los User Secrets (Secretos de usuario) son una funcionalidad diseñada para almacenar datos sensibles
          durante el desarrollo local sin exponerlos a tu repositorio de código fuente.
        </p>
      </section>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>¿Qué hacen y para qué sirven?</h2>
        <ol>
          <li>
            Almacenan información sensible como contraseñas o claves API de forma segura durante el desarrollo
            local.
          </li>
          <li>Evitan que dichos datos se suban accidentalmente a tu repositorio de código fuente (Git).</li>
          <li>
            Proporcionan una capa adicional de seguridad al no exponer información sensible en el código
            fuente.
          </li>
        </ol>
        <p>
          <strong>Importante</strong>: Los User Secrets no están encriptados y existen como texto plano en tu
          máquina. Esto significa que otros usuarios que accedan a tu perfil del usuario podrían leerlos.c
        </p>
      </section>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>¿Qué son las variables de entorno?</h2>
        <p>
          Las variables de entorno son valores que se definen en el sistema operativo y pueden ser leídos por
          las aplicaciones durante su ejecución. Son útiles para almacenar configuraciones sensibles como
          contraseñas o claves API, evitando exponerlas directamente en el código fuente.
        </p>
      </section>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>¿Qué hacen y para qué sirven?</h2>
        <ol>
          <li>
            Permiten separar la configuración sensible del código fuente, mejorando la seguridad de la
            aplicación.
          </li>
          <li>
            Facilitan la gestión de configuraciones diferentes para distintos entornos (desarrollo,
            producción, etc.) sin modificar el código.
          </li>
          <li>
            Son accesibles por cualquier aplicación que se ejecute en el sistema, lo que las hace versátiles
            para diferentes escenarios.
          </li>
        </ol>
      </section>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>Configuración y uso de User Secrets</h2>
        <ol>
          <li>
            En nuestro Program.cs y lo único que debemos hacer es lo siguiente después de definir en builder:
            <pre>
              <code>
                {`
var builder = WebApplication.CreateBuilder(args);
// Configuración de Variables de entorno, Secretos de usuarios y appsettings.json
builder.Configuration
	.SetBasePath(Directory.GetCurrentDirectory())
	.AddEnvironmentVariables()
	.AddUserSecrets<Program>()
	.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
	.AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true, reloadOnChange: true);
`}
              </code>
            </pre>
          </li>
          <li>
            Inicializamos los User Secrets en nuestro proyecto con el siguiente comando:
            <pre>
              <code>dotnet user-secrets init</code>
            </pre>
          </li>
          <li>
            Para saber si un proyecto ya fue configurado con User Secrets debemos revisar el archivo .csproj y
            verificar que contenga una línea similar a esta:
            <pre>
              <code>{`<UserSecretsId>your-guid-here</UserSecretsId>`}</code>
            </pre>
          </li>
          <li>
            Agregamos una clave-valor a los User Secrets con el siguiente comando:
            <pre>
              <code>{'dotnet user-secrets set "MiClaveSecreta" "ValorSecreto"'}</code>
            </pre>
            En formato JSON esto se vería así:
            <pre>
              <code>
                {`
{
  "MiClaveSecreta": "ValorSecreto"
}
`}
              </code>
            </pre>
          </li>
          <li>
            Para agregar una clave-objecto:
            <pre>
              <code>
                {`dotnet user-secrets set "ConnectionStrings:FirstDataBase" "FirstPassword"`}
                {`dotnet user-secrets set "ConnectionStrings:SecondDataBase" "SecondPassword"`}
              </code>
            </pre>
            En formato JSON esto se vería así:
            <pre>
              <code>
                {`
{
  "ConnectionStrings": {
    "FirstDataBase": "FirstPassword",
    "SecondDataBase": "SecondPassword"
  }
}
`}
              </code>
            </pre>
          </li>
          <li>
            Para agregar una clave-arreglo:
            <pre>
              <code>
                {`dotnet user-secrets set "AllowedHosts:0" "localhost"`}
                {`dotnet user-secrets set "AllowedHosts:1" "mydomain.com"`}
              </code>
            </pre>
            En formato JSON esto se vería así:
            <pre>
              <code>
                {`
{
  "AllowedHosts": [
    "localhost",
    "mydomain.com"
  ]
}
`}
              </code>
            </pre>
          </li>
          <li>
            Para ver todos los User Secrets almacenados:
            <pre>
              <code>dotnet user-secrets list</code>
            </pre>
          </li>
          <li>
            Para eliminar un User Secret específico:
            <pre>
              <code> {`dotnet user-secrets remove "MiClaveSecreta"`}</code>
            </pre>
          </li>
        </ol>
      </section>

      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>Configuración de las variables de entorno</h2>
        <ol>
          <li>
            En Windows, puedes establecer 2 tipos de variables de entorno, abriendo una terminal de PowerShell
            o CMD como administrador y ejecutando el siguiente comando:
            <pre>
              <code>{'setx MiVariableEntorno "ValorDeMiVariable" /M'}</code>
            </pre>
            El modificador <code>/M</code> indica que la variable se establece a nivel del sistema. Si lo
            omites, la variable se establecerá solo para el usuario actual.
          </li>
          <li>
            La sintaxis para definir las variables de entorno son similares a definirlos en los Secrets, la
            diferencia es que no usamos comillas dobles, sino, en su lugar usamos dos guines bajos para
            representar los niveles de jerarquía.
            <pre>
              <code>
                {`
setx ConnectionStrings__FirstDataBase "FirstPassword" /M
setx ConnectionStrings__SecondDataBase "SecondPassword" /M
`}
              </code>
            </pre>
            Tambien podemos definir arreglos de la siguiente manera:
            <pre>
              <code>
                {`
setx AllowedHosts__0 "localhost" /M
setx AllowedHosts__1 "mydomain.com" /M
`}
              </code>
            </pre>
          </li>
          <li>
            Para ver las variables de entorno definidas en Windows, puedes usar el siguiente comando en
            PowerShell:
            <pre>
              <code>Get-ChildItem Env:</code>
            </pre>
          </li>
        </ol>
      </section>
      <section className={styles.articleSectionContent}>
        <h2 className={styles.articleSubtitle}>¿Y ahora que hago al desplegar?</h2>
        <p>
          La configuración aplicada en el Program.cs permite que tu aplicación lea las variables de entorno
          configuradas en el servidor así que no debemos hacer otra cosa por esa parte. Sin embargo
          dependiendo del proveedor que uses para desplegar tu aplicación, la forma de configurar las
          variables de entorno puede variar. Y eso lo debes revisar en la documentación del proveedor que
          uses.
        </p>
      </section>
    </article>
  );
};
