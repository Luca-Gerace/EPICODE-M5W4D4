import './CommentArea.css';
import CommentList from './units/CommentList';
import AddCommentModal from './units/AddComment';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function CommentArea({ asin, comments, handleUpdateComments }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='review-container'>
      <div className='d-flex align-items-center justify-content-between pb-2'>
        <h4 className='m-0'>Reviews <small>({comments.length})</small></h4>
        <Button onClick={handleOpenModal} variant='success'>Add review</Button>
      </div>
      <CommentList asin={asin} comments={comments} handleUpdateComments={handleUpdateComments} />
      <AddCommentModal asin={asin} showModal={showModal} handleCloseModal={handleCloseModal} handleUpdateComments={handleUpdateComments} />
    </div>
  );
}