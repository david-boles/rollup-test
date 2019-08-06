import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default [
  {
    input: 'index.js',
    output: {
      format: 'iife',
    },
    plugins: [
      resolve(),
      commonjs({
        include: ['node_modules/**'], // `library` has been installed into `node_modules` but it does not get included.
      }),
    ]
  }
]