import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MainWrapper from "../mainWrapper/MainWrapper";
import { Link } from "react-router-dom";
import { DetailAction } from "../../actions/landingActions";

const Card = styled.div`
  margin: 10px;
  box-shadow: 0 4px 8px 0 black;
  width: min-content;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ParaContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`;

const P = styled.p`
  text-align: center;
  // color: #191919;
  // color: ${({ theme }) => (theme ? "#383838" : "white")};
`;

const Img = styled.img`
  height: 270px;
  width: 230px;
  padding: 4px;
`;
const LoadingContainer = styled.div`
  height: 75vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function LandingPage(props) {
  const movieIdHandle = (data) => {
    props.DetailAction(data);
  };
  if (props.isLoading) {
    return (
      <MainWrapper>
        <LoadingContainer
          style={{
            backgroundColor: props.darkMode ? "#E4E4E4" : "#383838",
          }}
        >
          <P style={{ color: props.darkMode ? "#383838" : "#E4E4E4" }}>
            Type something to see results
          </P>
        </LoadingContainer>
      </MainWrapper>
    );
  } else {
    return (
      <MainWrapper>
        <Div>
          {props.dataResult &&
            props.dataResult.map((value, index) => (
              <Card
                style={{
                  backgroundColor: props.darkMode ? "#E4E4E4" : "#383838",
                }}
                onClick={() => movieIdHandle(value.imdbID)}
                key={index}
              >
                <Link
                  style={{ color: props.darkMode ? "#383838" : "#E4E4E4" }}
                  to={{ pathname: `${value.imdbID}`, valid: true }}
                >
                  <Img src={value.Poster} alt='No Preview Available' />
                  <ParaContainer>
                    <P>
                      {value.Title}({value.Year})
                    </P>
                  </ParaContainer>
                </Link>
              </Card>
            ))}
        </Div>
      </MainWrapper>
    );
  }
}

const mapStateToProps = ({ landingReducers }) => {
  const { dataResult, detail, darkMode, isLoading } = landingReducers;
  return {
    dataResult,
    detail,
    darkMode,
    isLoading,
  };
};

export default connect(mapStateToProps, { DetailAction })(LandingPage);
