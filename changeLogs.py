import git
import semver
from collections import defaultdict
from datetime import datetime

# Inicializar el repositorio
repo = git.Repo('.')

# Obtener todos los tags (versiones) y ordenarlos de forma inversa
tags = sorted(repo.tags, key=lambda t: t.commit.committed_datetime, reverse=True)

# Agrupar commits por versión
commits_by_version = defaultdict(list)

# Obtener commits entre cada par de tags consecutivos
for i in range(len(tags)):
    commits = list(repo.iter_commits(f'{tags[i].commit.hexsha}'))
    version = tags[i].name
    commits_by_version[version].extend(commits)

# Generar el contenido del CHANGELOG.md
changelog_content = "# CHANGELOG\n\n"
for version, commits in commits_by_version.items():
    changelog_content += f"## {version}\n"
    for commit in commits:
        commit_date = datetime.fromtimestamp(commit.committed_date).strftime('%Y-%m-%d')
        changelog_content += f"- {commit_date} - {commit.message.strip()} ({commit.hexsha[:7]})\n"
    changelog_content += "\n"

# Guardar el contenido en CHANGELOG.md
with open('CHANGELOG.md', 'w') as changelog_file:
    changelog_file.write(changelog_content)

print("CHANGELOG.md generado exitosamente.")
