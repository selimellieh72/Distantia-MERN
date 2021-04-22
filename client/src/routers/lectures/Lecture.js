import React, { useContext, useState } from "react";
import Header from "../../Components/header/Header";
import {
  Container,
  Flex,
  Heading,
  Button,
  Box,
  Divider,
} from "@chakra-ui/react";
import BackIcon from "../../Components/Core/BackIcon";
import { ReactComponent as GridSvg } from "../../assets/svg/grid.svg";
import LectureList from "../../Components/Lecture/LectureList";
import { authContext } from "../../providers/AuthContext";
import LectureModal from "../../Components/Lecture/LectureModal";
import { AddIcon } from "@chakra-ui/icons";
import PageHeader from "../../Components/Core/PageHeader";
import { FaTrash } from "react-icons/fa";

export default function Lecture(props) {
  const isTeacher = useContext(authContext)[0].isTeacher;
  const { gradeId, chapterId } = props.match.params || {};
  const [lecturesData, setLecturesData] = useState();
  const [deleteState, setDeleteState] = useState(false);
  return (
    <>
      <Container maxW="container.lg" p="18px">
        <PageHeader
          deleteButton={
            <div
              onClick={() => setDeleteState(!deleteState)}
              className= {deleteState ?"page-header__icon__delete page-header__icon__delete__active":"page-header__icon__delete"}
            >
              <FaTrash />
            </div>
          }
          pathName="/grades"
          title={chapterId && lecturesData?.chapterTitle}
          addButton={
            isTeacher && (
              <LectureModal
                gradeId={gradeId}
                chapterId={chapterId}
                icon={AddIcon}
                setLecturesData={setLecturesData}
                button
              />
            )
          }
        />
        {/* <Flex alignItems="center" minW="300px" justifyContent="space-between">
          <Heading as="h1">
            {" "}
            <BackIcon pathName="/grades" />
            <span className="page-title">
              {chapterId && lecturesData?.chapterTitle}
            </span>
          </Heading>
          <div className="page-header__icon">
            {isTeacher && (
              <LectureModal
                gradeId={gradeId}
                chapterId={chapterId}
                icon={AddIcon}
                setLecturesData={setLecturesData}
                button
              />
            )}
            <Button>
              <GridSvg className="page-header__icon__grid" />
            </Button>
          </div>
        </Flex>
        <Box my="18px">
          <Divider borderColor="black" opacity="0.2" variant="solid" />
        </Box> */}
        <LectureList
          isTeacher={isTeacher}
          lecturesData={lecturesData}
          setLecturesData={setLecturesData}
          gradeId={gradeId}
          chapterId={chapterId}
          deleteState={deleteState}
        />
      </Container>
    </>
  );
}
