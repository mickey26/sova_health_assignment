import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../utils/logo.png";
import { BsSearch, BsToggleOff, BsToggleOn } from "react-icons/bs";
import { connect } from "react-redux";
import {
  LandingAction,
  SearchAction,
  LandingResult,
  DetailAction,
} from "../../actions/landingActions";
import { Link } from "react-router-dom";

const HeaderContainer = styled.nav`
  height: 40px;
  display: flex;
  padding: 6px;
  justify-content: space-between;
`;
const Input = styled.input`
  background: white;
  width: 430px;
  padding: 5px;
  border-style: none;
`;
const Div = styled.div`
  display: flex;
`;
const Img = styled.img``;
const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  padding: 0px 5px;
  border: 1px solid #d3d3d3;
`;
const DropdownListContainer = styled.div`
  background-color: #dde3ec;
  display: flex;
  padding: 7px;
  border-bottom: 1px solid white;
`;
const DropdoenContainer = styled.div`
  position: absolute;
  top: 40px;
  background: grey;
  border: 1px solid #d3d3d3;
  width: 465px;
  color: black;
`;
function Header(props) {
  const [searchEntry, setSearchEntry] = useState(" ");
  const [dropDown, setDropDown] = useState(false);

  const handleSearchField = (data) => {
    setSearchEntry(data);
    if (data.length > 2) {
      setDropDown(true);
      props.SearchAction(data);
    }
  };
  const handleSearch = () => {
    setDropDown(false);
    if (searchEntry.length > 2) {
      props.LandingResult(searchEntry);
    }
  };

  return (
    <HeaderContainer>
      <Img src={logo} alt='No Preview Available' />
      <Div>
        <InputFieldContainer>
          <Input
            placeholder={props.tempVar}
            onChange={(e) => handleSearchField(e.target.value)}
          />
          <BsSearch
            size={20}
            color={"#d3d3d3"}
            onClick={() => handleSearch()}
          />
        </InputFieldContainer>
        {dropDown ? (
          <DropdoenContainer>
            {props.dataDropdown &&
              props.dataDropdown.map((value, index) => (
                <Link
                  to={{ pathname: `${value.imdbID}` }}
                  style={{
                    color: "black",
                  }}
                  key={index}
                >
                  <DropdownListContainer
                    onClick={() => props.DetailAction(value.imdbID)}
                  >
                    {value.Title}
                  </DropdownListContainer>
                </Link>
              ))}
          </DropdoenContainer>
        ) : null}
      </Div>
      {props.theme ? (
        <BsToggleOff
          color='#E4E4E4'
          onClick={() => props.LandingAction(props.darkMode)}
          size={35}
        />
      ) : (
        <BsToggleOn
          color='#53B874'
          onClick={() => props.LandingAction(props.darkMode)}
          size={35}
        />
      )}
    </HeaderContainer>
  );
}

const mapStateToProps = ({ landingReducers }) => {
  const { dataDropdown, darkMode, tempData, tempVar } = landingReducers;
  return {
    dataDropdown,
    darkMode,
    tempData,
    tempVar,
  };
};

export default connect(mapStateToProps, {
  LandingAction,
  SearchAction,
  LandingResult,
  DetailAction,
})(Header);
