import React, { Component } from 'react';
import { DataGrid, ColDef } from '@material-ui/data-grid';
import "./MyDataGrid.css"

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 901, lastName: 'Roxie 901', firstName: 'Harvey', age: 65 },
    { id: 902, lastName: 'Roxie 902', firstName: 'Harvey', age: 65 },
    { id: 903, lastName: 'Roxie 903', firstName: 'Harvey', age: 65 },
    { id: 904, lastName: 'Roxie 904', firstName: 'Harvey', age: 65 },
    { id: 905, lastName: 'Roxie 905', firstName: 'Harvey', age: 65 },
    { id: 906, lastName: 'Roxie 906', firstName: 'Harvey', age: 65 },
    { id: 907, lastName: 'Roxie 907', firstName: 'Harvey', age: 65 },
    { id: 908, lastName: 'Roxie 908', firstName: 'Harvey', age: 65 },
    { id: 909, lastName: 'Roxie 909', firstName: 'Harvey', age: 65 },
    { id: 910, lastName: 'Roxie 910', firstName: 'Harvey', age: 65 },
    { id: 911, lastName: 'Roxie 911', firstName: 'Harvey', age: 65 },
    { id: 912, lastName: 'Roxie 912', firstName: 'Harvey', age: 65 },
  ];
  
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${
          params.getValue('lastName') || ''
        }`,
    },
  ];

class MyDataGrid extends Component {    
    constructor(props) {
        super(props);
        console.log("ctor of MyDataGrid")
        this.state=
        {
          selectedItems:[]
        }
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    onRowSelected(params)
    {
      console.log(`params:${params} this:${this}`)
      let selectedRow=params.data;
      let isSelected=params.isSelected;
      let selectedItems=this.state.selectedItems;
      if (isSelected === false)
      {
        //this.selectedItems.includes(selectedRow.id)
        console.log(`Selected item ${selectedRow.id} will be removed` )
        let index=selectedItems.indexOf(selectedRow.id)
        selectedItems.splice(index,1);
      }
      else
      {
        console.log(`Selected item ${selectedRow.id} will be added` )
        selectedItems.push(selectedRow.id);
      }
      
      this.setState( state=>(
        {
          selectedItems:selectedItems
        }));

    }
    OnShowSelectedItems()
    {
      let selectedItems=this.state.selectedItems;
      let display=selectedItems;
      alert(display);
    }
    GetDisplayOfSelectedItems()
    {
      return this.state.selectedItems.join();
    }

    render() {
        return (
            <div>
                <h1>  Updated single row via modal UI and then place it back in the datagrid?   Filter the table? </h1>
                <div className="container-fluid">
                  <button className="btn btn-primary btn-sm" onClick={()=>this.OnShowSelectedItems()}>Selected rows</button>
                  <label className="m-2">Count of selected items={this.state.selectedItems.length}</label>
                  <label className="m-2">The selected items are:{this.state.selectedItems.join()}</label>
                </div>
                <div style={{  width: '100%' }}>
                    <DataGrid 
                      rows={rows} columns={columns}   
                      rowsPerPageOptions={null} checkboxSelection={true}  autoHeight={true} rowHeight={30}
                      onRowSelected={(retval)=>this.onRowSelected(retval)}
                      />
                </div>                
            </div>
          );
    }
}


export default MyDataGrid;