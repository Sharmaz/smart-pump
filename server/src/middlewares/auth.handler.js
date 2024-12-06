// Handlers for errors, auth and validations.
function checkUserId(req, res, next) {
  const { user } = req;
  const { id } = req.params;
  if (user.sub === id) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

function checkIsActive(req, res, next) {
  const { user } = req;
  if (user.isActive) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
}

export { checkUserId, checkIsActive };
