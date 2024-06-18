import { Button, Modal } from 'react-bootstrap';
import axios from '../../../modules/ApiAxios';

export default function DeleteCommentModal({ showModal, handleCloseModal, comment, handleUpdateComments }) {

  // Delete Review handler
  const handleDeleteReview = () => {
    axios.delete(`comments/${comment._id}`)
      .then(response => {
        if (response.status === 200) {
          handleUpdateComments(comment._id);
          handleCloseModal();
        }
      });
  };

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete review</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className='pb-4'>Do you want to delete this review?</p>
        <p><b>Review:</b> {comment.comment}</p>
        <p><b>Vote:</b> {comment.rate}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button className='w-100 py-2' variant="danger" onClick={handleDeleteReview}>Delete review</Button>
      </Modal.Footer>
    </Modal>
  );
}