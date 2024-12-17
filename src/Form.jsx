import React, { useState ,useEffect} from 'react';
import './style.css';

function FormsComponent() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    city: '',
    pin: '',
  });
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formFlag, setFormFlag] = useState(null);

  useEffect(() =>{
    setFormFlag(false);
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

  };
  const handleSubmit = (e) => {
    if (
      FormValidations()
    ) {
      setEditIndex(null);
      e.preventDefault();
      setFormFlag(false);
      setTableData([...tableData, data]);
      setData({
        fname: '',
        lname: '',
        city: '',
        pin: '',
      });
    }else{
      setFormFlag(true)
     console.log(FormValidations(),'331:::') 
    } 
  };

  const RemoveRow = (index) => {
    const vc = tableData.toSpliced(index, 1);
    //  const vc =  tableData.filter((v,i)=>index !== i)
    setTableData(vc);
  };

  const EditTable = (rowIndex, rowData) => {
    setEditIndex(rowIndex);
    setData(tableData[rowIndex]);
  };

  const handleEdit = () => {
    tableData.splice(editIndex, 1, data);
    setTableData([...tableData]);
    setEditIndex(null);
  };

  const FormValidations = () =>{
  const validate =  data.fname !== '' &&
    data.lname !== '' &&
    data.city !== '' &&
    data.pin !== ''
    return validate
  }

  return (
    <div>
      
      <div>
        <label htmlFor="">FirstName:</label>
        <input
          type="text"
          name="fname"
          value={data.fname}
          onChange={handleChange}
          required
        />
        <p>{formFlag && data.fname === '' ? <span class="errorMessage">This form is Required</span> :''}</p>
      </div>
      <div>
        <label htmlFor="">LastName:</label>
        <input
          type="text"
          name="lname"
          value={data.lname}
          onChange={handleChange}
          required
        />
          <p>{formFlag && data.lname === '' ? <span class="errorMessage">This form is Required</span> :''}</p>
      </div>
      <div>
        <label htmlFor="">City:</label>
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
          required
        />
          <p>{formFlag && data.city === '' ? <span class="errorMessage">This form is Required</span> :''}</p>
      </div>

      <div>
        <label htmlFor="">PinCode:</label>
        <input
          type="text"
          name="pin"
          value={data.pin}
          onChange={handleChange}
          required
        />
          <p>{formFlag && data.pin === '' ? <span class="errorMessage">This form is Required</span> :''}</p>
      </div>
      <br />
      {editIndex === null ? (
        <button type='submit' onClick={handleSubmit}>Submit</button>
      ) : (
        <button onClick={handleEdit}>Update</button>
      )}
      <br /> <br />
      {tableData.length ? (
        <table border="1">
          <thead>
            <th>FirstName</th>
            <th>LastName</th>
            <th>City</th>
            <th>PinCode</th>
            <th>Remove</th>
            <th>Edit</th>
          </thead>
          <tbody>
            {tableData.length > 0 &&
              tableData.map((row, index) => {
                return (
                  <tr>
                    <td>{row.fname}</td>
                    <td>{row.lname}</td>
                    <td>{row.city}</td>
                    <td>{row.pin}</td>
                    <td onClick={() => RemoveRow(index)}>❌</td>
                    <td onClick={() => EditTable(index, row)}>🖊</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        'There is No Users Data'
      )}
    </div>
    
  );
}

export default FormsComponent;
