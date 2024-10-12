import path from 'path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export const onCreateWebpackConfig = ({
  _stage,
  _getConfig,
  _rules,
  _loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}
