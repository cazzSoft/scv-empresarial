# Decisiones de Workflow –  scv-empresarial

## ¿Cuándo usamos rebase?
Usamos rebase principalmente para ordenar y limpiar el historial antes de subir cambios a main.  
Nos ayudó a unir commits pequeños o repetidos (sobre todo de documentación y estilos) y a corregir mensajes que no seguían la convención de commits.
En resumen, lo usamos para que el historial quedara claro y fácil de entender.

## ¿Cuándo usamos merge?
Usamos merge cuando una rama de feature ya estaba terminada y lista para integrarse a main.  
De esta forma queda claro cuándo una funcionalidad se incorporó al proyecto sin perder el contexto del trabajo hecho.
O cuando se queriere de propiedad una funcionalidad ya realizada en otro ramas

## ¿Cuándo usamos cherry-pick?
El cherry-pick lo consideramos útil solo para casos puntuales, como aplicar un cambio específico sin traer todo el contenido de una rama.  
Es ideal para correcciones pequeñas o urgentes.
Para integrar funcionalidades listas para producción sin arrastrar cambios experimentales. Esta estrategia permitió aplicar hotfixes o funcionalidades estables de forma controlada.


## Lecciones aprendidas
- Mantener commits claros desde el inicio ahorra tiempo al final.
- El rebase es muy útil, pero debe usarse con cuidado en ramas compartidas.
- Seguir Conventional Commits desde el principio evita tener que corregir mensajes después.
- Un historial limpio facilita el trabajo en equipo y la revisión del proyecto.