import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  async function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoriteTeachers = JSON.parse(response);

        setFavorites(favoriteTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos"></PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorite
          ></TeacherItem>
        ))}
      </ScrollView>
    </View>
  );
}

export default Favorites;
