import { useContext } from 'react'
import { ModalContext } from 'react-modal-classic'

function ModalContentFirst(){
    
    const { closeModal } = useContext(ModalContext)

    return (
        <div>
            <figure>
                <img src="tom-bradley-robin.jpg" alt="image content"/>
                <figcaption>© Tom Bradley</figcaption>
            </figure>
            <div className="modal-caption">
                <p>This React modal is based on a component <br/>and a context provider.<br/>
                    <button onClick={closeModal} className="close">Close</button>
                </p>
            </div>
        </div>
    )
}

export default ModalContentFirst