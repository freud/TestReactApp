import * as React from 'react';

export default class CreateTemplateForm extends React.Component<any, any> {
    constructor(props: any){
      super(props);
      
      this.state = { templateId: this.props.defaultTemplateId };
    }

    handleSubmit(val: any) {
      // Do anything you want with the form value
      console.log(val);
      event.preventDefault();
    }

    handleChange(event: any) {
      this.setState({value: event.target.value});
    }

    public render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label htmlFor="templateId" className="col-md-2 col-form-label">
                Template ID
              </label>
              <div className="col-md-10">
                <input type="templateId" className="form-control" 
                       id="templateId" placeholder="Template ID" 
                       value={this.state.templateId} onChange={this.handleChange} />
              </div>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
          </form>
        );
    }
}
