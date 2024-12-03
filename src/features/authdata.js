// Save to localStorage
export const saveAuthData = ({ token, roleId, userId, hospitalId, patientId }) => {
    if (token) localStorage.setItem('token', token);
    if (roleId) localStorage.setItem('roleId', roleId);
    if (userId) localStorage.setItem('userId', userId);
    if (hospitalId) localStorage.setItem('hospitalId', hospitalId);
    if (patientId) localStorage.setItem('patientId', patientId);
  };
  
  // Clear all authentication data from localStorage
  export const clearAuthData = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('roleId');
    localStorage.removeItem('userId');
    localStorage.removeItem('hospitalId');
    localStorage.removeItem('patientId');
  };
  