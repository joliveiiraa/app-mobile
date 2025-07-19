import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, Grid, List, Star } from 'lucide-react-native';
import { sampleBooks } from '@/data/sampleBooks';

export default function LibraryScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Fiction', 'Mystery', 'Sci-Fi', 'Classic', 'Fantasy'];

  const filteredBooks = sampleBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || book.genre === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const GridBookCard = ({ book }: { book: any }) => (
    <TouchableOpacity style={styles.gridCard}>
      <Image source={{ uri: book.cover }} style={styles.gridCover} />
      <Text style={styles.gridTitle} numberOfLines={2}>{book.title}</Text>
      <Text style={styles.gridAuthor} numberOfLines={1}>{book.author}</Text>
      <View style={styles.gridRating}>
        <Star size={12} color="#fbbf24" fill="#fbbf24" />
        <Text style={styles.rating}>{book.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  const ListBookCard = ({ book }: { book: any }) => (
    <TouchableOpacity style={styles.listCard}>
      <Image source={{ uri: book.cover }} style={styles.listCover} />
      <View style={styles.listContent}>
        <Text style={styles.listTitle}>{book.title}</Text>
        <Text style={styles.listAuthor}>{book.author}</Text>
        <Text style={styles.listGenre}>{book.genre}</Text>
        <View style={styles.listRating}>
          <Star size={12} color="#fbbf24" fill="#fbbf24" />
          <Text style={styles.rating}>{book.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
        <View style={styles.searchContainer}>
          <Search size={20} color="#6b7280" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search books..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.controls}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive
              ]}>
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.viewControls}>
          <TouchableOpacity
            style={[styles.viewButton, viewMode === 'grid' && styles.viewButtonActive]}
            onPress={() => setViewMode('grid')}
          >
            <Grid size={20} color={viewMode === 'grid' ? '#2563eb' : '#6b7280'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewButton, viewMode === 'list' && styles.viewButtonActive]}
            onPress={() => setViewMode('list')}
          >
            <List size={20} color={viewMode === 'list' ? '#2563eb' : '#6b7280'} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {viewMode === 'grid' ? (
          <View style={styles.gridContainer}>
            {filteredBooks.map((book) => (
              <GridBookCard key={book.id} book={book} />
            ))}
          </View>
        ) : (
          <View style={styles.listContainer}>
            {filteredBooks.map((book) => (
              <ListBookCard key={book.id} book={book} />
            ))}
          </View>
        )}
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
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1f2937',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  categories: {
    flex: 1,
    paddingLeft: 20,
  },
  categoryChip: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: '#2563eb',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  categoryTextActive: {
    color: '#ffffff',
  },
  viewControls: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  viewButton: {
    padding: 8,
    marginLeft: 8,
    borderRadius: 8,
  },
  viewButtonActive: {
    backgroundColor: '#eff6ff',
  },
  content: {
    flex: 1,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
  },
  gridCard: {
    width: '47%',
    marginBottom: 20,
  },
  gridCover: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 12,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  gridAuthor: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  gridRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    padding: 16,
  },
  listCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  listCover: {
    width: 60,
    height: 90,
    borderRadius: 8,
  },
  listContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  listAuthor: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  listGenre: {
    fontSize: 12,
    color: '#2563eb',
    marginBottom: 8,
  },
  listRating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
});