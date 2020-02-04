exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cuisines')
    .then(function () {
      // Inserts seed entries
      return knex('cuisines').insert([
        {"name": "Albanian"},
        {"name": "American"},
        {"name": "Argentine"},
        {"name": "Arab"},
        {"name": "Armenian"},
        {"name": "Assyrian"},
        {"name": "Bangladeshi"},
        {"name": "Bengali"},
        {"name": "Brazilian"},
        {"name": "Buddhist"},
        {"name": "Bulgarian"},
        {"name": "Cajun"},
        {"name": "Cantonese"},
        {"name": "Caribbean"},
        {"name": "Chechen"},
        {"name": "Chinese"},
        {"name": "Cypriot"},
        {"name": "Danish"},
        {"name": "English"},
        {"name": "Estonian"},
        {"name": "French"},
        {"name": "Filipino"},
        {"name": "Georgian"},
        {"name": "German"},
        {"name": "Goan"},
        {"name": "Greek"},
        {"name": "Hong Kong"},
        {"name": "Indian"},
        {"name": "Indonesian"},
        {"name": "Inuit"},
        {"name": "Irish"},
        {"name": "Italian American"},
        {"name": "Italian"},
        {"name": "Jamaican"},
        {"name": "Japanese"},
        {"name": "Jewish"},
        {"name": "Korean"},
        {"name": "Kurdish"},
        {"name": "Laotian"},
        {"name": "Lebanese"},
        {"name": "Latvian"},
        {"name": "Lithuanian"},
        {"name": "Louisiana Creole"},
        {"name": "Mangalorean"},
        {"name": "Malay"},
        {"name": "Mediterranean"},
        {"name": "Mexican"},
        {"name": "Mordovian"},
        {"name": "Native American"},
        {"name": "Nepalese"},
        {"name": "New Mexican"},
        {"name": "Polish"},
        {"name": "Pakistani"},
        {"name": "Persian"},
        {"name": "Peruvian"},
        {"name": "Portuguese"},
        {"name": "Punjabi"},
        {"name": "Romanian"},
        {"name": "Russian"},
        {"name": "Serbian"},
        {"name": "Sindhi"},
        {"name": "Slovak"},
        {"name": "Slovenian"},
        {"name": "Somali"},
        {"name": "South Indian"},
        {"name": "Soviet"},
        {"name": "Spanish"},
        {"name": "Sri Lankan"},
        {"name": "Taiwanese"},
        {"name": "Thai"},
        {"name": "Turkish"},
        {"name": "Ukrainian"},
        {"name": "Vietnamese"},
        {"name": "Zambian"},
        {"name": "Zanzibari"}
      ]);
    });
};