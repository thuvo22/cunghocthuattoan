import React from "react";
import Collapse from "@kunukn/react-collapse";
import "./styles.scss";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from './shared/NavBar';
import Down from "./Down";
const initialState = [false, false, false, false, false, false];
const nestedInitialState = [false, false, false];
const reducer = (state, { type, index }) => {
    switch (type) {
        case "toggle":
            let newState = [...state];
            newState[index] = !newState[index];
            return newState;

        default:
            throw new Error("reducer configuration");
    }
}
const Block = ({ isOpen, title, onToggle, pos, children }) => {
    return (
        <div className="block">
            <button className="btn toggle" onClick={onToggle}>
                <span className={pos == "outmost" ? "outsideBox" : "insideBox"}>{title}</span>
                <Down isOpen={isOpen} />
            </button>
            <Collapse isOpen={isOpen}>{children}</Collapse>
        </div>
    );
}
const ProblemList = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [nestedState, nestedDispatch] = React.useReducer(reducer, nestedInitialState);

    return (
        <>
            <Navbar/>
     
            <div className="app">

                <br /><br /><br />
                <Block
                    title="Mảng"
                    isOpen={state[0]}
                    onToggle={() => dispatch({ type: "toggle", index: 0 })}
                    pos="outmost"
                >
                    <Block
                        title="Dễ"
                        isOpen={nestedState[0]}
                        onToggle={() => nestedDispatch({ type: "toggle", index: 0 })}
                        pos="inside"
                    >
                        <div className="content">

                            <Link to="/kiem-so-lon-nhat-trong-mang"><p>Kiếm số lớn nhất trong mảng</p></Link>
                            <Link to="/kiem-so-lon-nhi-trong-mang"><p>Kiếm số lớn nhì trong mảng</p></Link>
                            <p>Số lần xuất hiện duy nhất</p>
                            <p>Kiếm hai số có tổng S</p>
                        </div>
                    </Block>
                    <Block
                        title="Vừa"
                        isOpen={nestedState[1]}
                        pos="inside"
                        onToggle={() => nestedDispatch({ type: "toggle", index: 1 })}
                    >
                        <div className="content">
                            <p>Sẽ sớm ra</p>
                        </div>
                    </Block>
                    <Block
                        title="Khó"
                        isOpen={nestedState[2]}
                        pos="inside"
                        onToggle={() => nestedDispatch({ type: "toggle", index: 2 })}
                    >
                        <div className="content">
                            <p>Sẽ sớm ra</p>
                        </div>
                    </Block>
                </Block>

                <Block
                    title="Chuỗi"
                    isOpen={state[1]}
                    pos="outmost"
                    onToggle={() => dispatch({ type: "toggle", index: 1 })}
                >
                    <div className="content">
                        <p>Sẽ sớm ra</p>
                    </div>
                </Block>

                <Block
                    title="Danh sách liên kết"
                    isOpen={state[2]}
                    pos="outmost"
                    onToggle={() => dispatch({ type: "toggle", index: 2 })}
                >
                    <div className="content">
                        <p>Sẽ sớm ra</p>
                    </div>
                </Block>
                <Block
                    title="Đệ quy"
                    isOpen={state[3]}
                    pos="outmost"
                    onToggle={() => dispatch({ type: "toggle", index: 3 })}
                >
                    <div className="content">
                        <p>Sẽ sớm ra</p>
                    </div>
                </Block>
                <Block
                    title="Quy Hoạch Động"
                    isOpen={state[4]}
                    pos="outmost"
                    onToggle={() => dispatch({ type: "toggle", index: 4 })}
                >
                    <div className="content">
                        <p>Sẽ sớm ra</p>
                    </div>
                </Block>
                <Block
                    title="Đồ Thị"
                    isOpen={state[5]}
                    pos="outmost"
                    onToggle={() => dispatch({ type: "toggle", index: 5 })}
                >
                    <div className="content">
                        <p>Sẽ sớm ra</p>
                    </div>
                </Block>
                <Block
                    title="Cây"
                    isOpen={state[6]}
                    pos="outmost"
                    onToggle={() => dispatch({ type: "toggle", index: 6 })}
                >
                    <div className="content">
                        <p>Sẽ sớm ra</p>
                    </div>
                </Block>
            </div>
            
            </>
    );
}
export default ProblemList;