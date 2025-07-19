import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookOpen, TrendingUp, Clock, Star } from 'lucide-react-native';
import { sampleBooks } from '@/data/sampleBooks';

export default function HomeScreen() {
  const featuredBooks = sampleBooks.slice(0, 3);
  const recentBooks = sampleBooks.slice(3, 6);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Good morning!</Text>
          <Text style={styles.subtitle}>Ready to continue reading?</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <BookOpen size={24} color="#2563eb" />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Books Read</Text>
          </View>
          <View style={styles.statItem}>
            <Clock size={24} color="#059669" />
            <Text style={styles.statNumber}>45h</Text>
            <Text style={styles.statLabel}>Reading Time</Text>
          </View>
          <View style={styles.statItem}>
            <TrendingUp size={24} color="#dc2626" />
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Continue Reading</Text>
          <TouchableOpacity style={styles.continueCard}>
            <Image source={{ uri: featuredBooks[0].cover }} style={styles.continueImage} />
            <View style={styles.continueContent}>
              <Text style={styles.continueTitle}>{featuredBooks[0].title}</Text>
              <Text style={styles.continueAuthor}>{featuredBooks[0].author}</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: '67%' }]} />
                </View>
                <Text style={styles.progressText}>67% complete</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Books</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredBooks.map((book) => (
              <TouchableOpacity key={book.id} style={styles.bookCard}>
                <Image source={{ uri: book.cover }} style={styles.bookCover} />
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
                <View style={styles.ratingContainer}>
                  <Star size={12} color="#fbbf24" fill="#fbbf24" />
                  <Text style={styles.rating}>{book.rating}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Added</Text>
          {recentBooks.map((book) => (
            <TouchableOpacity key={book.id} style={styles.listItem}>
              <Image source={{ uri: book.cover }} style={styles.listImage} />
              <View style={styles.listContent}>
                <Text style={styles.listTitle}>{book.title}</Text>
                <Text style={styles.listAuthor}>{book.author}</Text>
                <Text style={styles.listGenre}>{book.genre}</Text>
              </View>
              <View style={styles.listRating}>
                <Star size={14} color="#fbbf24" fill="#fbbf24" />
                <Text style={styles.rating}>{book.rating}</Text>
              </View>
            </TouchableOpacity>
          ))}
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
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  statItem: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1f2937',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  continueCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  continueImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  continueContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  continueTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  continueAuthor: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
  progressContainer: {
    marginTop: 'auto',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e5e7eb',
    borderRadius: 2,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2563eb',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: '#6b7280',
  },
  bookCard: {
    width: 140,
    marginLeft: 20,
  },
  bookCover: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  listImage: {
    width: 50,
    height: 75,
    borderRadius: 6,
  },
  listContent: {
    flex: 1,
    marginLeft: 12,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  listAuthor: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 2,
  },
  listGenre: {
    fontSize: 11,
    color: '#2563eb',
  },
  listRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});