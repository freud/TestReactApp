import * as React from 'react';
import Input from 'react-toolbox/lib/input';
import {Button} from 'react-toolbox/lib/button';

export default class CreateTemplateForm extends React.Component<any, any> {
    constructor(props: any){
      super(props);
      
      this.state = { 
        templateId: this.props.defaultTemplateId
      };
    }

    handleSubmit(val: any) {
      event.preventDefault();
    }

    handleChange (name:string, value:string) {
      this.setState({...this.state, [name]: value});
    }

    public render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <Input type="templateId" value={this.state.templateId} onChange={this.handleChange.bind(this, 'templateId')} />
            <Button type="submit" icon='add' label='Dodaj' raised primary />
          </form>
        );
    }
}
