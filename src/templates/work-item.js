import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
// UI
import ItemWrapper from "../components/layout/item-layout/item-wrapper"
import ItemHeading from "../components/layout/item-layout/item-heading"

const ItemContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 562px) {
    flex-direction: column;
  }
`

const WorkTimeline = styled.p`
  color: ${(props) => props.theme.colors.lightSkyBlue};
  text-align: center;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 500;
  margin: -1.5vh 0 3vh 0;
`

const List = styled.ul`
  color: ${(props) => props.theme.colors.desaturatedSkyBlue};
  text-align: justify;
  font-size: 1rem;
  line-height: 1.4;
  margin: 0 0 3vh 0;
`

const ListItem = styled.li`
  margin-bottom: 2vh;
`

const TechStack = styled.p`
  color: ${(props) => props.theme.colors.lightSkyBlue};
  text-align: right;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 500;
  margin: 0 0 3vh 0;
`

const ProjectItem = (props) => {
  return (
    <ItemWrapper>
      <ItemHeading>{props.title}</ItemHeading>
      <WorkTimeline>{props.timeline}</WorkTimeline>
      <ItemContentContainer>
        <List>
          <ListItem>{props.listItemOne}</ListItem>
          <ListItem>{props.listItemTwo}</ListItem>
          <ListItem>{props.listItemThree}</ListItem>
        </List>
        <TechStack>{props.techStack}</TechStack>
      </ItemContentContainer>
    </ItemWrapper>
  )
}

export default ProjectItem

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  timeline: PropTypes.string.isRequired,
  listItemOne: PropTypes.string.isRequired,
  listItemTwo: PropTypes.string,
  listItemThree: PropTypes.string,
  techStack: PropTypes.string.isRequired,
}

ProjectItem.defaultProps = {
  title: '"XYZ Workplace": "Awesome Work!"',
  timeline: "Dec 1955 - Present",
  listItemOne: "Placeholder list item",
  techStack: "Love",
}
