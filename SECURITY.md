# SECURITY.md

## 1. Objetivo

Este documento describe las medidas de seguridad aplicadas al repositorio para proteger el código fuente, la documentación y la información del proyecto.

## 2. Protección de datos sensibles

El archivo `.gitignore` excluye archivos que no deben subirse al repositorio:

- `.env` y otros archivos de configuración con contraseñas, tokens o claves.
- Archivos temporales, registros y copias de seguridad innecesarias.
- Configuraciones locales del editor.
- Dependencias y archivos generados que pueden reconstruirse.
- Binarios y archivos compilados que no sea necesario compartir.

Estas exclusiones reducen el riesgo de publicar información confidencial y mantienen el repositorio organizado.

El archivo `.gitignore` no elimina archivos que ya estén versionados. Si se publica una contraseña o un token, debe revocarse o cambiarse inmediatamente.

## 3. Gestión de permisos

Se aplicará el principio de mínimo privilegio:

- **Lectura (Read):** para personas que necesitan consultar el código y la documentación.
- **Escritura (Write):** para desarrolladores que deben realizar cambios y subirlos.
- **Administración (Admin):** para responsables que gestionan la configuración, los permisos y los colaboradores.

Los permisos se comprobarán desde la configuración de acceso del repositorio en GitHub.

## 4. Buenas prácticas de seguridad

- Proteger la rama principal mediante reglas de protección cuando estén disponibles.
- Utilizar ramas de trabajo para desarrollar nuevas funcionalidades.
- Revisar los cambios mediante pull requests antes de incorporarlos a la rama principal.
- No publicar contraseñas, claves privadas ni tokens.
- Utilizar contraseñas robustas y autenticación en dos pasos.
- Mantener actualizadas las dependencias.
- Revisar los cambios antes de realizar commits y pushes.

## 5. Copias de seguridad y recuperación

Se conservará el historial de cambios de Git y se realizarán copias de seguridad periódicas en una ubicación independiente.

En caso de pérdida de datos:

1. Identificar el problema y evitar sobrescribir los datos recuperables.
2. Revisar el historial de Git para localizar una versión correcta.
3. Recuperar los archivos mediante Git o desde una copia de seguridad.
4. Comprobar que el proyecto funciona correctamente.
5. Documentar la incidencia y las medidas correctivas.

El historial de Git permite recuperar versiones anteriores, pero no sustituye a una copia de seguridad independiente del repositorio.

## 6. Evidencias

Se recopilarán capturas de pantalla del archivo `.gitignore`, de este documento, de los permisos configurados en GitHub y de las pruebas de acceso realizadas.

## 7. Conclusión

La combinación de exclusión de archivos sensibles, control de permisos, revisión de cambios y copias de seguridad permite mejorar la seguridad, la accesibilidad y la recuperación del proyecto.