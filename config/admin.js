module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6dd444f5220c6916723b97282c5f4c11'),
  },
});
