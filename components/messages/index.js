
function Message() {

    const messages = [
        {
            name: "rico suave",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis expedita optio accusantium officiis est dicta id sint. Eligendi est inventore fuga velit numquam? Dolore fuga eveniet magni eius suscipit!.",
            date: "5/21/2022"
        },
        {
            name: "Ben smith",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis expedita optio accusantium officiis est dicta id sint. Eligendi est inventore fuga velit numquam? Dolore fuga eveniet magni eius suscipit!.",
            date: "4/21/2022"
        },
        {
            name: "Williams John",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis expedita optio accusantium officiis est dicta id sint. Eligendi est inventore fuga velit numquam? Dolore fuga eveniet magni eius suscipit!.",
            date: "3/21/2022"
        }
    ]

    return (
        <div className="container">
            <h2 className={`mt-5 mb-3`}>Send message</h2>
            <div className="row">
                <div className="col-lg-6">
                <textarea className="form-control" name="message" id="message" cols="10" rows="10" placeholder="write your message to send"></textarea>
                <div className="mt-3">
                    <button className="btn btn-primary">Send message</button>
                </div>
                </div>
            </div>

            <h2 className={`mt-5`}>All messages</h2>
            <div className="row mt-4">
                {
                    messages.map(message => (
                        <div className="col-lg-8">
                            <div className="card bg-light mb-3">
                                <div className="card-body">
                                    <h4>To: {message.name}</h4>
                                    Recieved: <span className="text-warning">{message.date}</span> <br />
                                    {message.message}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>


        </div>
    )
}

export default Message;