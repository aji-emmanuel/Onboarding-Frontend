import React from 'react';
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const TaskItem = () => {

    return (
       <tr>
            <td>
                Sign contract for "What are conference organizers
                afraid of?"
            </td>
            <td className="td-actions text-right">
                <OverlayTrigger
                    overlay={<Tooltip id="button-tooltip-1">Done </Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <Button
                            className="btn-simple btn-link p-1"
                            style={{width:"2.5rem"}}
                            {...triggerHandler}
                            type="button"
                            variant="info"
                        >
                            <i className="fas fa-check"></i>
                        </Button>
                    )}
                </OverlayTrigger>
                <OverlayTrigger
                    overlay={<Tooltip id="button-tooltip-2">Decline..</Tooltip>}
                >
                    {({ ref, ...triggerHandler }) => (
                        <Button
                            className="btn-simple btn-link p-1"
                            type="button"
                            {...triggerHandler}
                            style={{width:"2.5rem"}}
                            variant="danger"
                        >
                            <i className="fas fa-times"></i>
                        </Button>
                    )}
                </OverlayTrigger>
            </td>
        </tr>
    );
};

export default TaskItem
