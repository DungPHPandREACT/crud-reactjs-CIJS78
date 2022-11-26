import logo from './logo.svg';
import './App.css';
import {
  Button,
  Table,
  Container,
  InputGroup,
  InputGroupText,
  Input,
} from 'reactstrap';
import RowInfo from './RowInfo';
import { useState } from 'react';

function App() {
  const [listStudent, setListStudent] = useState([
    {
      id: 1,
      name: 'Nguyễn Văn A',
      age: 16,
      gender: 'Boy',
    },
    {
      id: 2,
      name: 'Lung Thị Linh',
      age: 15,
      gender: 'Girl',
    },
  ]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [id, setId] = useState('');

  const handleSetName = (event) => {
    setName(event.target.value);
  };
  const handleSetAge = (event) => {
    setAge(event.target.value);
  };
  const handleSetGender = (event) => {
    setGender(event.target.value);
  };

  const handleAddNewStudent = () => {
    const newStudent = {
      id: Date.now(),
      name: name,
      age: age,
      gender: gender,
    };

    setListStudent([...listStudent, newStudent]);
  };

  const deleteStudent = (id) => {
    console.log(id);
    const newListStudent = listStudent.filter((student, key) => {
      return student.id !== id;
    });
    setListStudent(newListStudent);
  };

  const showData = (student) => {
    console.log(student);
    setName(student.name);
    setAge(student.age);
    setGender(student.gender);
    setId(student.id);
  };

  const updateStudent = () => {
    const index = listStudent.findIndex((student) => student.id == id);
    const newData = [...listStudent];
    newData[index].name = name;
    newData[index].age = age;
    newData[index].gender = gender;

    setListStudent([...newData]);
  };

  return (
    <Container className="mt-5">
      <InputGroup className="mt-3">
        <InputGroupText>Name</InputGroupText>
        <Input
          value={name}
          placeholder="Enter your name..."
          onChange={handleSetName}
        />
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroupText>Age</InputGroupText>
        <Input
          value={age}
          type="number"
          placeholder="Enter your age..."
          onChange={handleSetAge}
        />
      </InputGroup>
      <InputGroup className="mt-3">
        <InputGroupText>Gender</InputGroupText>
        <Input
          value={gender}
          placeholder="Enter your gender..."
          onChange={handleSetGender}
        />
      </InputGroup>
      <Button className="mt-3" color="primary" onClick={handleAddNewStudent}>
        Add new student
      </Button>
      <Button className="mt-3 ml-3" color="success" onClick={updateStudent}>
        Update student
      </Button>
      <Table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listStudent.map((student, key) => {
            return (
              <RowInfo
                id={student.id}
                name={student.name}
                age={student.age}
                gender={student.gender}
                onDelete={deleteStudent}
                onUpdate={showData}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
