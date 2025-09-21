# Toolkit Template

Repository template for creating a new Web Component, specifically
tailored to be part of the
[Web at Illinois](https://github.com/web-illinois) Web Implementation
Guidelines Group (WIGG) [Toolkit](https://github.com/web-illinois/toolkit-management).

## How To Use

> [!IMPORTANT]
> Follow the [steps in the toolkit-management documentation](https://github.com/web-illinois/toolkit-management/blob/main/documentation/README.md)
> to contribute a component to the toolkit.

## How this template works

The content that will be in the resulting repository is templated under
the [`template`](./template) directory. The templating is configured
in [`index.js`](./index.js), and uses a simple scaffolding tool called
[CAZ](https://github.com/zce/caz).

There is a [templating GitHub Workflow](./.github/workflows/templating.yml) in this
repository that's configured to run only once when the template is used.
That workflow executes CAZ to scaffold the repository to the proper contents
with the naming determined by the new repository's name.

CAZ accepts input using "prompts", which can be specified in the command
line invocation of the tool. The workflow specifies the values to those
prompts, and CAZ takes care of the rest.

Finally, the workflow commits the changes to the new repository. This usually
takes less than 10 seconds. Once done, the repository is ready to be worked on.

## Developing this template

### Adding files

New files can be added to the [`template`](./template) directory, and they
are automatically picked up.

- Substitutions in file names happen with curly braces, `{variable}`
- Inside files, [lodash](https://lodash.com/docs#template) templates are used,
  which uses `<%= variable %>` as delimiters.

> [!NOTE]
> GitHub Workflows cannot be templated, and so must be entirely dynamic
> and contained in the main [`.github/workflows`](./.github/workflows) directory.

### Adding Variables

If additional variables are needed, they must be added in two locations:

1. In [`index.js`](./index.js) as prompts.
2. In the [workflow](./.github/workflows/templating.yml), they need to be
   given values as arguments for the `caz` command.

