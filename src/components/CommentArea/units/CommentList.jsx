import { useState } from 'react';
import SingleComment from './SingleComment';
import UpdateCommentModal from './UpdateComment';
import DeleteCommentModal from './DeleteComment';

export default function CommentList({ comments, handleUpdateComments }) {

  // Hooks
  const [editingReview, setEditingReview] = useState(null);
  const [deletingReview, setDeletingReview] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Handler per update review tramite modale
  const handleEditReview = (review) => {
    setEditingReview(review);
    setShowUpdateModal(true);
  };

  // Handler per delete review tramite modale
  const handleDeleteReview = (review) => {
    setDeletingReview(review);
    setShowDeleteModal(true);
  };

  // Handler per chiudere le modali
  const handleCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  // Update della lista delle review post aggiornamento di una review
  const updateCommentsList = (updatedComment) => {
    const updatedReviews = comments.map(r => r._id === updatedComment._id ? updatedComment : r);
    handleUpdateComments(updatedReviews);
  };

  // Update della lista delle review post cancellazione di una review
  const removeCommentFromList = (commentId) => {
    handleUpdateComments(comments.filter(r => r._id !== commentId));
  };

  return (
    <>
      {comments.map(review => (
        <SingleComment 
          key={review._id} 
          review={review}
          handleDeleteReview={handleDeleteReview} 
          handleEditReview={handleEditReview}
        />
      ))}
      {editingReview && (
        <UpdateCommentModal
          showModal={showUpdateModal}
          handleCloseModal={handleCloseUpdateModal}
          comment={editingReview}
          handleUpdateComments={updateCommentsList}
        />
      )}
      {deletingReview && (
        <DeleteCommentModal
          showModal={showDeleteModal}
          handleCloseModal={handleCloseDeleteModal}
          comment={deletingReview}
          handleUpdateComments={removeCommentFromList}
        />
      )}
    </>
  );
}