import { Offcanvas } from 'react-bootstrap';
import CommentArea from '../CommentArea';
import axios from 'axios';
import { useEffect, useState } from 'react';

const OffcanvasCommentArea = ({ show, handleClose, book }) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (book) {
        fetchComments(book.asin);
        }
    }, [book]);

    if (!book) return null;

    // Get delle review associate a quel libro
    const fetchComments = (asin) => {
        axios.get(`books/${asin}/comments/`)
        .then(response => setComments(response.data));
    };

    // Handler per l'update della commentarea
    const handleUpdateCommentArea = () => {
        fetchComments(book.asin);
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement={'end'}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>{book.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <CommentArea data-testid='OffcanvasCommentArea' asin={book.asin} comments={comments} handleUpdateCommentArea={handleUpdateCommentArea} />
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default OffcanvasCommentArea;
