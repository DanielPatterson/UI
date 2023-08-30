import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import 'animate.css';

import { useState } from 'react';
import SearchBar from './Components/SearchBar';

import { contacts } from "./data";
import ContactList from "./Components/ContactList";

export default function App() {
  
  const [people] = useState(contacts);
  const [search, setSearch] = useState("");

  const handelserch = (searchedperson) => {
    setSearch(searchedperson);
  };

  const [sortType, setSortType] = useState("ascending");
  const [sortByField, setSortByField] = useState("id");
  const [result] = useState();
  const [state, setstate] = useState({
    list: contacts
  })
  
  function sortFunc(results, sortType, sortByField) {
    if (sortType === "ascending") {
      results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)  
    }
    else if (sortType === "descending") {
      results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1)
    }
    return results;
  }

  function sortBy(e) {
    setSortByField(e);
    setstate({
      list: !result ? sortFunc(contacts, sortType, e) : sortFunc(result, sortType, e)
    })
  }

  return (

    <>

      <Container className="pt-4">

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12} className="mb-4 text-center">
            <h2 className="fw-bolder pt-3">Contact Lookup</h2>
          </Col>
        </Row> 

        <Row className="SearchColumn">
          <Col className="shadow-sm p-0">
            <SearchBar
              searchp={search}
              handelserchp={handelserch}
            />

            <Form.Select defaultValue={'id'} onChange={(e) => sortBy(e.target.value)} aria-label="SortBy" className="">
              <option value="id">Ascending</option>
              <option value="firstName">Descending</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <ContactList 
              contactprops={people.filter(
                (item) => item.firstName.toLowerCase().includes(search.toLowerCase()) || item.lastName.toLowerCase().includes(search.toLowerCase())
              )}
            />
          </Col>
        </Row>
        
      </Container>

    </>

  );
}