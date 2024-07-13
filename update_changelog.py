import subprocess

# Get the latest commits
result = subprocess.run(['git', 'log', '--pretty=format:%s'], stdout=subprocess.PIPE)
commits = result.stdout.decode('utf-8').split('\n')

# Write the commits to the changelog
with open('CHANGELOG.md', 'a') as changelog:
    changelog.write('\n## [Unreleased]\n')
    for commit in commits:
        changelog.write(f'- {commit}\n')