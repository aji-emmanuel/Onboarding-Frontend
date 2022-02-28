import React from 'react';
import TaskItem from './TaskItem';
import { Card, Table } from "react-bootstrap";

const Task = () => {
    return (
        <Card className="card-tasks">
            <Card.Header>
                <Card.Title as="h4">
                    <i className="fas fa-thumbtack"></i>
                    ' My Tasks
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <div className="table-full-width">
                    <Table>
                        <tbody>

                            <TaskItem />
                            <TaskItem />
                            <TaskItem />
                            <TaskItem />
                            <TaskItem />

                        </tbody>
                    </Table>
                </div>
            </Card.Body>
            <Card.Footer>
                <hr></hr>
                <div className="stats">
                    <i className="fad fa-sync-alt"></i>
                    Updated 3 minutes ago
                </div>
            </Card.Footer>
        </Card>
    );
};

export default Task
