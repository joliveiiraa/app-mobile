import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Moon, Download, Bookmark, Bell, Shield, CircleHelp as HelpCircle, Star, ChevronRight, Trash2 } from 'lucide-react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoDownload, setAutoDownload] = useState(false);
  const [offlineReading, setOfflineReading] = useState(true);

  const SettingItem = ({ 
    icon, 
    title, 
    subtitle, 
    onPress, 
    rightElement, 
    showChevron = true 
  }: {
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    onPress?: () => void;
    rightElement?: React.ReactNode;
    showChevron?: boolean;
  }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <View style={styles.iconContainer}>
          {icon}
        </View>
        <View style={styles.settingText}>
          <Text style={styles.settingTitle}>{title}</Text>
          {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        </View>
      </View>
      <View style={styles.settingRight}>
        {rightElement}
        {showChevron && !rightElement && (
          <ChevronRight size={20} color="#6b7280" />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <SettingItem
            icon={<User size={24} color="#2563eb" />}
            title="Account"
            subtitle="Manage your account settings"
            onPress={() => {}}
          />
        </View>

        {/* Reading Preferences */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reading Preferences</Text>
          
          <SettingItem
            icon={<Moon size={24} color="#2563eb" />}
            title="Dark Mode"
            subtitle="Enable dark theme for reading"
            rightElement={
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#e5e7eb', true: '#2563eb' }}
                thumbColor={darkMode ? '#ffffff' : '#f3f4f6'}
              />
            }
            showChevron={false}
          />

          <SettingItem
            icon={<Download size={24} color="#2563eb" />}
            title="Auto Download"
            subtitle="Automatically download new chapters"
            rightElement={
              <Switch
                value={autoDownload}
                onValueChange={setAutoDownload}
                trackColor={{ false: '#e5e7eb', true: '#2563eb' }}
                thumbColor={autoDownload ? '#ffffff' : '#f3f4f6'}
              />
            }
            showChevron={false}
          />

          <SettingItem
            icon={<Bookmark size={24} color="#2563eb" />}
            title="Offline Reading"
            subtitle="Download books for offline access"
            rightElement={
              <Switch
                value={offlineReading}
                onValueChange={setOfflineReading}
                trackColor={{ false: '#e5e7eb', true: '#2563eb' }}
                thumbColor={offlineReading ? '#ffffff' : '#f3f4f6'}
              />
            }
            showChevron={false}
          />
        </View>

        {/* Notifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          
          <SettingItem
            icon={<Bell size={24} color="#2563eb" />}
            title="Push Notifications"
            subtitle="Get notified about new releases"
            rightElement={
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#e5e7eb', true: '#2563eb' }}
                thumbColor={notifications ? '#ffffff' : '#f3f4f6'}
              />
            }
            showChevron={false}
          />
        </View>

        {/* Library Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Library</Text>
          
          <SettingItem
            icon={<Download size={24} color="#2563eb" />}
            title="Downloaded Books"
            subtitle="Manage offline content"
            onPress={() => {}}
          />

          <SettingItem
            icon={<Bookmark size={24} color="#2563eb" />}
            title="Bookmarks"
            subtitle="View all your bookmarks"
            onPress={() => {}}
          />

          <SettingItem
            icon={<Trash2 size={24} color="#dc2626" />}
            title="Clear Reading History"
            subtitle="Remove all reading data"
            onPress={() => {}}
          />
        </View>

        {/* Support & Legal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support & Legal</Text>
          
          <SettingItem
            icon={<HelpCircle size={24} color="#2563eb" />}
            title="Help & Support"
            subtitle="Get help or contact support"
            onPress={() => {}}
          />

          <SettingItem
            icon={<Star size={24} color="#2563eb" />}
            title="Rate App"
            subtitle="Share your feedback"
            onPress={() => {}}
          />

          <SettingItem
            icon={<Shield size={24} color="#2563eb" />}
            title="Privacy Policy"
            subtitle="Learn about data protection"
            onPress={() => {}}
          />
        </View>

        {/* Storage Info */}
        <View style={styles.storageSection}>
          <Text style={styles.storageTitle}>Storage Usage</Text>
          <View style={styles.storageInfo}>
            <View style={styles.storageItem}>
              <Text style={styles.storageLabel}>Downloaded Books</Text>
              <Text style={styles.storageValue}>245 MB</Text>
            </View>
            <View style={styles.storageItem}>
              <Text style={styles.storageLabel}>Cache</Text>
              <Text style={styles.storageValue}>12 MB</Text>
            </View>
            <View style={styles.storageItem}>
              <Text style={styles.storageLabel}>Total</Text>
              <Text style={styles.storageValueTotal}>257 MB</Text>
            </View>
          </View>
        </View>

        <View style={styles.versionInfo}>
          <Text style={styles.versionText}>EBook Reader v1.0.0</Text>
          <Text style={styles.buildText}>Build 2025.1.1</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eff6ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storageSection: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  storageTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  storageInfo: {
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 16,
  },
  storageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  storageLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  storageValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1f2937',
  },
  storageValueTotal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
  versionInfo: {
    alignItems: 'center',
    paddingVertical: 32,
  },
  versionText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  buildText: {
    fontSize: 12,
    color: '#9ca3af',
  },
});