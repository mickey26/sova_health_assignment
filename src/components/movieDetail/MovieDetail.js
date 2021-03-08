import React from "react";
import { connect } from "react-redux";
import MainWrapper from "../mainWrapper";
import styled from "styled-components";
import { DetailAction } from "../../actions/landingActions";
import { useHistory } from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 black;
  width: 500px;
`;
const Img = styled.img`
  height: 270px;
  width: 230px;
  padding: 4px;
`;
const P = styled.p`
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  padding: 6px;
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px;
`;

const Button = styled.div`
  border: 1px;
  padding: 8px 40px;
  box-shadow: 0 4px 8px 0 black;
  cursor: pointer;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const HeadingContainer = styled.p`
  display: flex;
  justify-content: center;
  padding: 6px;
  font-size: 20px;
`;

function MovieDetail(props) {
  let history = useHistory();

  return (
    <MainWrapper>
      <Div>
        <Card
          style={{
            backgroundColor: props.darkMode ? "#E4E4E4" : "#383838",
          }}
        >
          <Img src={props.detail.Poster} alt='No Preview Available' />
          <DetailDiv style={{ color: props.darkMode ? "#383838" : "#E4E4E4" }}>
            <HeadingContainer>
              {props.detail.Title}({props.detail.Year})
            </HeadingContainer>
            {props.detail.Ratings &&
              props.detail.Ratings.map((value, index) =>
                index === 0 ? (
                  <P key={index}>IMDB Rating : {value.Value}</P>
                ) : null
              )}
            <P>Runtime: {props.detail.Runtime}</P>
            <P>Genre: {props.detail.Genre}</P>
            <P>Director : {props.detail.Director}</P>
            <P>Country: {props.detail.Country}</P>
            <P> {props.detail.Plot}</P>
          </DetailDiv>
        </Card>
      </Div>
      <ButtonContainer
        style={{ color: props.darkMode ? "#383838" : "#E4E4E4" }}
      >
        <Button onClick={() => history.goBack()}> View Similar</Button>
      </ButtonContainer>
    </MainWrapper>
  );
}

const mapStateToProps = ({ landingReducers }) => {
  const { detail, darkMode } = landingReducers;
  return {
    detail,
    darkMode,
  };
};

export default connect(mapStateToProps, { DetailAction })(MovieDetail);
