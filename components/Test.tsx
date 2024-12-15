export type TestProps = {
  value: string
}

const Test = (props: TestProps) => {
  return <div>{props.value || 'Hello World'}</div>
}

export default Test