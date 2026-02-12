// Persist OTP store across hot reloads in development
if (!globalThis.otpStore) {
    globalThis.otpStore = new Map();
}

const otpStore = globalThis.otpStore;

export default otpStore;
