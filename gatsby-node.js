// TODO: fixes problem with gatsby build (react-match-breakpoints uses window object)
exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-match-breakpoints/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
