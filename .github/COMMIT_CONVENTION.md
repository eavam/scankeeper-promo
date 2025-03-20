# Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages. **All commit messages must be in English.**

## Format

Each commit message consists of a **header**, an optional **body**, and an optional **footer**:

```
<type>(<optional scope>): <description>

<optional body>

<optional footer>
```

## Header

The header is mandatory and must conform to the following format:

- **type**: What kind of change this commit is making (see types below)
- **scope** (optional): What section of the codebase is affected
- **description**: A short summary of the changes in present tense, not capitalized, no period at the end

### Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Changes that do not affect the meaning of the code (formatting, etc.)
- **refactor**: Code changes that neither fix a bug nor add a feature
- **perf**: Changes that improve performance
- **test**: Adding or correcting tests
- **build**: Changes to the build process or dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

## Body

The body is optional but encouraged for providing context. Use it to explain the motivation behind the change, and contrast it with previous behavior.

## Footer

The footer is optional and is used for referencing issues or breaking changes:

- References to issues: `Closes #123, #456`
- Breaking changes: begin with `BREAKING CHANGE:`

## Examples

### Simple feature

```
feat: add image gallery component
```

### Bug fix with scope

```
fix(homepage): resolve layout shift on mobile devices
```

### Refactor with description and body

```
refactor(api): simplify data fetching logic

Replace multiple fetch calls with a single optimized request.
This improves performance and reduces network traffic.
```

### Breaking change

```
feat: change API response format

BREAKING CHANGE: The response structure has been modified to include
additional metadata. Clients need to update their parsing logic.
```

### Documentation update with issue reference

```
docs: update installation instructions

Closes #123
```

## Tools

You can use tools like [commitlint](https://commitlint.js.org/) and
[commitizen](http://commitizen.github.io/cz-cli/) to help you follow this
convention.
