declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classnames: IClassNames
  export = classnames
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

// переменная окружения
// не смогла избавиться от ошибки
// eslint-disable-next-line
declare const __IS_DEV__: boolean
