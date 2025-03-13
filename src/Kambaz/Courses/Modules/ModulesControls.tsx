import ModuleEditor from "./ModuleEditor";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import BlockIcon from "./BlockIcon.tsx";
import {useState} from "react";

export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
    { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Button variant="danger" onClick={handleShow} className="me-1 float-end" id="wd-add-module-btn">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Module
            </Button>
            <Dropdown className="float-end me-2">
                <Dropdown.Toggle variant="secondary" id="wd-publish-all-btn">
                    <GreenCheckmark /> Publish All
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item id="wd-publish-all">
                        <GreenCheckmark /> Publish All
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-publish-all-modules-and-items">
                        <GreenCheckmark /> Publish all modules and items
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-publish-modules-only">
                        <GreenCheckmark /> Publish modules only
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-unpublish-all-modules-and-items">
                        <BlockIcon /> Unpublish all modules
                    </Dropdown.Item>
                    <Dropdown.Item id="wd-unpublish-modules-only">
                        <BlockIcon /> Unpublish modules only
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Button variant="secondary" className="me-2 float-end" id="wd-collapse-all">
                Collapse All
            </Button>
            <Button variant="secondary" className="me-2 float-end" id="wd-view-progress">
                View Progress
            </Button>
            <ModuleEditor show={show} handleClose={handleClose} dialogTitle="Add Module"
                          moduleName={moduleName} setModuleName={setModuleName} addModule={addModule} />

        </div>
    );}

