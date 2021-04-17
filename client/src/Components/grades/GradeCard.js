import React, { useContext } from "react";
import { authContext } from "../../providers/AuthContext";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import GradeDetails from "./GradeDetails";
import { ReactComponent as LearningSvg } from "../../assets/svg/learning.svg";

export default function GradeCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { isTeacher, discipline } = useContext(authContext)[0];

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay>
          <DrawerContent overflowX="hidden" overflowY="auto">
            <DrawerCloseButton color="#fff" />
            <GradeDetails
              minW="300px"
              isTeacher={isTeacher}
              title={props.title}
              students={props.students}
              material={props.gradeMaterial}
              id={props.id}
            />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <div ref={props.linkRef} onClick={onOpen} className="card">
        <LearningSvg className="card__class__icon" />
        <div className="card__details">
          <h1 className="card__title">
            {isTeacher ? props.title : props.gradeMaterial}
          </h1>
          {!isTeacher && props.title}
        </div>
      </div>
    </>
  );
}
