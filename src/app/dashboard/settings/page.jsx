"use client";
import { useState, useEffect } from 'react';
import { useSession } from '@/context/SessionContext';
import { 
  Settings,
  User,
  Shield,
  Bell,
  ArrowLeft,
  Trash2,
  LogOut,
  Save,
  Eye,
  EyeOff,
  Mail,
  Phone,
  Lock,
  Key,
  Heart,
  Check,
  X,
  AlertTriangle,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SettingsLayout() {
  const { logout,user } = useSession(); 
  const [currentView, setCurrentView] = useState('account');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteReason, setDeleteReason] = useState('');
  const [deleteConfirmation, setDeleteConfirmation] = useState('');
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Form states
  const [accountData, setAccountData] = useState({
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [privacyData, setPrivacyData] = useState({
    showToRegisteredOnly: true,
    blurPhotoUntilInterest: false,
    contactDetailsVisibility: 'mutual',
    hideProfileTemporarily: false
  });

  const [notificationData, setNotificationData] = useState({
    emailInterests: true,
    smsMessages: true,
    pushNotifications: true,
    allNotifications: true
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSave = () => {
    // Simulate save action
    console.log('Saving settings...');
    // Show success toast
  };

  const handleDeleteAccount = () => {
    if (deleteConfirmation === 'DELETE') {
      console.log('Deleting account with reason:', deleteReason);
      setShowDeleteModal(false);
    }
  };
 const handleLogout = async () => {
  try {
    const response = await fetch('/api/logout', {
      method: 'POST',
      credentials: 'include', // Important for cookies
    });

    if (response.ok) {
      // Clear client-side state
      logout(); // From your SessionContext
      // Redirect or perform other cleanup
    } else {
      throw new Error('Logout failed');
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
};
  const navigationItems = [
    { id: 'account', label: 'Account', icon: User },
   
    { id: 'log-out', label: 'Log Out', icon: LogOut, action: () => setShowLogoutModal(true) }
  ];

  const renderAccountSettings = () => (
    <div className="space-y-6">
      {/* Email Section */}
    

      {/* Phone Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-50">
        <div className="flex items-center space-x-3 mb-4">
          <Phone className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-bold text-slate-800">Phone Number</h3>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
            <input
              type="tel"
              value={user?.phone}
              disabled
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
            />
          </div>
        
        </div>
      </div>

     
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      {/* Profile Visibility */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-50">
        <div className="flex items-center space-x-3 mb-4">
          <Eye className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-bold text-slate-800">Profile Visibility</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-800">Show profile to registered users only</p>
              <p className="text-sm text-slate-600">Only verified members can see your profile</p>
            </div>
            <button
              onClick={() => setPrivacyData({...privacyData, showToRegisteredOnly: !privacyData.showToRegisteredOnly})}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                privacyData.showToRegisteredOnly ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                privacyData.showToRegisteredOnly ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-800">Blur photo until interest is accepted</p>
              <p className="text-sm text-slate-600">Photos will be blurred for non-matches</p>
            </div>
            <button
              onClick={() => setPrivacyData({...privacyData, blurPhotoUntilInterest: !privacyData.blurPhotoUntilInterest})}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                privacyData.blurPhotoUntilInterest ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                privacyData.blurPhotoUntilInterest ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-800">Hide my profile temporarily</p>
              <p className="text-sm text-slate-600">Pause your profile visibility</p>
            </div>
            <button
              onClick={() => setPrivacyData({...privacyData, hideProfileTemporarily: !privacyData.hideProfileTemporarily})}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                privacyData.hideProfileTemporarily ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                privacyData.hideProfileTemporarily ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-50">
        <div className="flex items-center space-x-3 mb-4">
          <Shield className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-bold text-slate-800">Contact Details Visibility</h3>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Who can view my contact details?</label>
          <select
            value={privacyData.contactDetailsVisibility}
            onChange={(e) => setPrivacyData({...privacyData, contactDetailsVisibility: e.target.value})}
            className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
          >
            <option value="all">All premium members</option>
            <option value="mutual">Only mutual matches</option>
            <option value="none">No one</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-50">
        <div className="flex items-center space-x-3 mb-4">
          <Bell className="w-5 h-5 text-orange-500" />
          <h3 className="text-lg font-bold text-slate-800">Notification Preferences</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-slate-800">Master Notifications</p>
              <p className="text-sm text-slate-600">Enable or disable all notifications</p>
            </div>
            <button
              onClick={() => setNotificationData({...notificationData, allNotifications: !notificationData.allNotifications})}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                notificationData.allNotifications ? 'bg-orange-500' : 'bg-gray-200'
              }`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                notificationData.allNotifications ? 'translate-x-6' : 'translate-x-1'
              }`} />
            </button>
          </div>
          
          <div className="border-t pt-4 space-y-4">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={notificationData.emailInterests}
                onChange={(e) => setNotificationData({...notificationData, emailInterests: e.target.checked})}
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <div>
                <p className="font-medium text-slate-800">Email for new interests</p>
                <p className="text-sm text-slate-600">Get notified when someone shows interest</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={notificationData.smsMessages}
                onChange={(e) => setNotificationData({...notificationData, smsMessages: e.target.checked})}
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <div>
                <p className="font-medium text-slate-800">SMS for chat messages</p>
                <p className="text-sm text-slate-600">Receive SMS alerts for new messages</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={notificationData.pushNotifications}
                onChange={(e) => setNotificationData({...notificationData, pushNotifications: e.target.checked})}
                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <div>
                <p className="font-medium text-slate-800">Push notifications for profile views</p>
                <p className="text-sm text-slate-600">Get notified when someone views your profile</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDeleteAccount = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-50">
        <div className="flex items-center space-x-3 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h3 className="text-lg font-bold text-slate-800">Delete Account</h3>
        </div>
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-800">Important Information</h4>
                <ul className="text-sm text-red-700 mt-2 space-y-1">
                  <li>• Your profile will be permanently deleted</li>
                  <li>• All your matches and conversations will be lost</li>
                  <li>• Premium subscriptions are non-refundable</li>
                  <li>• This action cannot be undone</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Reason for leaving (optional)</label>
            <select
              value={deleteReason}
              onChange={(e) => setDeleteReason(e.target.value)}
              className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50"
            >
              <option value="">Select reason</option>
              <option value="found-match">Found match outside platform</option>
              <option value="not-satisfied">Not satisfied with service</option>
              <option value="privacy-concerns">Privacy concerns</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <button
            onClick={() => setShowDeleteModal(true)}
            className="w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
          >
            Delete My Account
          </button>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(currentView) {
      case 'account':
        return renderAccountSettings();
      case 'privacy':
        return renderPrivacySettings();
      case 'notifications':
        return renderNotificationSettings();
      case 'delete-account':
        return renderDeleteAccount();
      default:
        return renderAccountSettings();
      
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-rose-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden mb-6"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">⚙️ Settings</h1>
              <p className="text-rose-100">Manage your account preferences and privacy</p>
            </div>
            <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg border border-orange-50 p-6">
              <h2 className="font-bold text-slate-800 mb-4">Navigation</h2>
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.action) {
                          item.action();
                        } else {
                          setCurrentView(item.id);
                        }
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        currentView === item.id && !item.action
                          ? 'bg-orange-50 text-orange-700 border border-orange-200'
                          : 'text-slate-600 hover:bg-orange-50 hover:text-orange-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl shadow-lg border border-rose-50 p-6">
              {renderContent()}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Delete Account Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl border border-orange-50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-lg font-bold text-slate-800">Confirm Account Deletion</h3>
              </div>
              
              <p className="text-slate-600 mb-4">
                This action cannot be undone. To confirm, please type <strong>DELETE</strong> in the box below.
              </p>
              
              <input
                type="text"
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                placeholder="Type DELETE to confirm"
                className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-orange-50 mb-4"
              />
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 px-4 py-2 border border-orange-200 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAccount}
                  disabled={deleteConfirmation !== 'DELETE'}
                  className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                    deleteConfirmation === 'DELETE'
                      ? 'bg-red-600 text-white hover:bg-red-700'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Delete Account
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logout Modal */}
      <AnimatePresence>
        {showLogoutModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl border border-orange-50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <LogOut className="w-6 h-6 text-orange-500" />
                <h3 className="text-lg font-bold text-slate-800">Confirm Logout</h3>
              </div>
              
              <p className="text-slate-600 mb-6">
                Are you sure you want to log out now?
              </p>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="flex-1 px-4 py-2 border border-orange-200 text-orange-600 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-rose-600 text-white rounded-lg hover:from-rose-500 hover:to-rose-600 transition-colors"
                >
                  Log Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}