import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Settings,
  Sun,
  Moon,
  Minus,
  Plus,
  ArrowLeft,
} from 'lucide-react-native';
import { sampleBooks } from '@/data/sampleBooks';

const { width, height } = Dimensions.get('window');

export default function ReaderScreen() {
  const [currentBook] = useState(sampleBooks[0]); // Default to first book
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [showControls, setShowControls] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const totalPages = currentBook.content.length;
  const progress = ((currentPage + 1) / totalPages) * 100;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const adjustFontSize = (change: number) => {
    const newSize = fontSize + change;
    if (newSize >= 12 && newSize <= 24) {
      setFontSize(newSize);
    }
  };

  const readerStyles = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    color: isDarkMode ? '#e5e5e5' : '#1f2937',
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: readerStyles.backgroundColor }]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      
      {/* Header */}
      <View style={[styles.header, showControls && styles.headerVisible]}>
        <TouchableOpacity style={styles.headerButton}>
          <ArrowLeft size={24} color={readerStyles.color} />
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <Text style={[styles.bookTitle, { color: readerStyles.color }]} numberOfLines={1}>
            {currentBook.title}
          </Text>
          <Text style={[styles.pageInfo, { color: readerStyles.color }]}>
            Page {currentPage + 1} of {totalPages}
          </Text>
        </View>
        <TouchableOpacity style={styles.headerButton} onPress={() => setShowSettings(true)}>
          <Settings size={24} color={readerStyles.color} />
        </TouchableOpacity>
      </View>

      {/* Progress Bar */}
      <View style={[styles.progressContainer, showControls && styles.progressVisible]}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={[styles.progressText, { color: readerStyles.color }]}>
          {Math.round(progress)}%
        </Text>
      </View>

      {/* Reading Area */}
      <TouchableOpacity 
        style={styles.readingArea}
        onPress={() => setShowControls(!showControls)}
        activeOpacity={1}
      >
        <ScrollView 
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <Text style={[styles.content, { 
            fontSize: fontSize, 
            color: readerStyles.color,
            lineHeight: fontSize * 1.6 
          }]}>
            {currentBook.content[currentPage]}
          </Text>
        </ScrollView>
      </TouchableOpacity>

      {/* Navigation Controls */}
      <View style={[styles.controls, showControls && styles.controlsVisible]}>
        <TouchableOpacity 
          style={[styles.navButton, currentPage === 0 && styles.navButtonDisabled]}
          onPress={prevPage}
          disabled={currentPage === 0}
        >
          <ChevronLeft size={24} color={currentPage === 0 ? '#9ca3af' : readerStyles.color} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.bookmarkButton, isBookmarked && styles.bookmarkActive]}
          onPress={toggleBookmark}
        >
          <Bookmark 
            size={24} 
            color={isBookmarked ? '#fbbf24' : readerStyles.color}
            fill={isBookmarked ? '#fbbf24' : 'transparent'}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, currentPage === totalPages - 1 && styles.navButtonDisabled]}
          onPress={nextPage}
          disabled={currentPage === totalPages - 1}
        >
          <ChevronRight size={24} color={currentPage === totalPages - 1 ? '#9ca3af' : readerStyles.color} />
        </TouchableOpacity>
      </View>

      {/* Settings Modal */}
      <Modal
        visible={showSettings}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.settingsModal, { backgroundColor: readerStyles.backgroundColor }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: readerStyles.color }]}>Reading Settings</Text>
              <TouchableOpacity onPress={() => setShowSettings(false)}>
                <Text style={styles.closeButton}>Done</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.settingItem}>
              <Text style={[styles.settingLabel, { color: readerStyles.color }]}>Theme</Text>
              <TouchableOpacity 
                style={styles.themeButton}
                onPress={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? (
                  <Sun size={24} color={readerStyles.color} />
                ) : (
                  <Moon size={24} color={readerStyles.color} />
                )}
                <Text style={[styles.themeText, { color: readerStyles.color }]}>
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.settingItem}>
              <Text style={[styles.settingLabel, { color: readerStyles.color }]}>Font Size</Text>
              <View style={styles.fontControls}>
                <TouchableOpacity 
                  style={styles.fontButton}
                  onPress={() => adjustFontSize(-2)}
                >
                  <Minus size={20} color={readerStyles.color} />
                </TouchableOpacity>
                <Text style={[styles.fontSizeDisplay, { color: readerStyles.color }]}>
                  {fontSize}px
                </Text>
                <TouchableOpacity 
                  style={styles.fontButton}
                  onPress={() => adjustFontSize(2)}
                >
                  <Plus size={20} color={readerStyles.color} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.previewContainer}>
              <Text style={[styles.previewLabel, { color: readerStyles.color }]}>Preview</Text>
              <Text style={[styles.previewText, { 
                fontSize: fontSize, 
                color: readerStyles.color,
                lineHeight: fontSize * 1.6 
              }]}>
                This is how your text will appear with the current settings.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    opacity: 0,
    transform: [{ translateY: -50 }],
  },
  headerVisible: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
  headerButton: {
    padding: 8,
  },
  headerInfo: {
    flex: 1,
    alignItems: 'center',
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  pageInfo: {
    fontSize: 12,
    opacity: 0.7,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 12,
    opacity: 0,
    transform: [{ translateY: -20 }],
  },
  progressVisible: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    marginRight: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563eb',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    fontWeight: '500',
    minWidth: 40,
    textAlign: 'right',
  },
  readingArea: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    minHeight: height - 200,
  },
  content: {
    textAlign: 'justify',
    letterSpacing: 0.5,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    opacity: 0,
    transform: [{ translateY: 50 }],
  },
  controlsVisible: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
  navButton: {
    padding: 12,
    borderRadius: 8,
  },
  navButtonDisabled: {
    opacity: 0.3,
  },
  bookmarkButton: {
    padding: 12,
  },
  bookmarkActive: {
    transform: [{ scale: 1.1 }],
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  settingsModal: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 40,
    minHeight: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  closeButton: {
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '500',
  },
  settingItem: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  themeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  themeText: {
    fontSize: 14,
    marginLeft: 12,
  },
  fontControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 150,
  },
  fontButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 6,
  },
  fontSizeDisplay: {
    fontSize: 16,
    fontWeight: '500',
    minWidth: 50,
    textAlign: 'center',
  },
  previewContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  previewLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    opacity: 0.7,
  },
  previewText: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 8,
    textAlign: 'justify',
  },
});