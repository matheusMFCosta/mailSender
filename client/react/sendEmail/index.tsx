import * as React from 'react'
import { Mutation } from 'react-apollo'
import sendEmail from './sendEmail.gql'
import { Button } from 'gocommerce.styleguide'

export interface IAppProps {}

export default class IApp extends React.Component<IAppProps, any> {
  public render() {
    return (
      <div>
        <Mutation mutation={sendEmail}>
          {(mutation, mutationData) => (
            console.log(`data`, mutationData), <Button onClick={() => mutation()}>3333 </Button>
          )}
        </Mutation>
      </div>
    )
  }
}
