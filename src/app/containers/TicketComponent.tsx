import { style } from "typestyle";

const classNames = {
    ticket: style({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 5em -1em black',
    }),

}

export const Ticket: React.FunctionComponent = () => {
    return (
        <div className={classNames.ticket}>
            <h2>Message Type: </h2>

            <div className="user-info">
                <p>Name: </p>
                <p>Email: </p>
            </div>

            <div className="title">
                <h3>Heading</h3>
            </div>

            <div className="description">
                <p>Message</p>
            </div>


        </div >
    );
}