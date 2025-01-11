document.getElementById('recommend-btn').addEventListener('click', () => {
  const genre = document.getElementById('genre').value;
  const duration = document.getElementById('duration').value;
  const mood = document.getElementById('mood').value;

  const recommendation = document.getElementById('recommendation');

  if (!genre || !duration || !mood) {
    recommendation.textContent = 'Please select all fields to get a recommendation.';
    return;
  }

  const movieSuggestions = {
    Action: {
      Short: {
        Happy: 'Mad Max: Fury Road',
        Relaxed: 'John Wick',
        Excited: 'Die Hard',
        Adventurous: 'Indiana Jones',
      },
      Medium: {
        Happy: 'The Avengers',
        Relaxed: 'Mission: Impossible',
        Excited: 'Gladiator',
        Adventurous: 'Jurassic Park',
      },
      Long: {
        Happy: 'The Dark Knight',
        Relaxed: 'Inception',
        Excited: 'The Lord of the Rings: The Two Towers',
        Adventurous: 'Avatar',
      },
    },
    Comedy: {
      Short: {
        Happy: 'The Grand Budapest Hotel',
        Relaxed: 'Napoleon Dynamite',
        Excited: 'Scott Pilgrim vs. The World',
        Adventurous: 'Paddington 2',
      },
      Medium: {
        Happy: 'Crazy, Stupid, Love',
        Relaxed: 'Forrest Gump',
        Excited: 'Deadpool',
        Adventurous: 'Jumanji: Welcome to the Jungle',
      },
      Long: {
        Happy: 'The Wolf of Wall Street',
        Relaxed: 'The Intern',
        Excited: 'Tropic Thunder',
        Adventurous: 'Pirates of the Caribbean',
      },
    },
    Drama: {
      Short: {
        Happy: 'The Pursuit of Happyness',
        Relaxed: 'Little Miss Sunshine',
        Excited: 'Whiplash',
        Adventurous: 'Good Will Hunting',
      },
      Medium: {
        Happy: 'The Blind Side',
        Relaxed: 'The Fault in Our Stars',
        Excited: 'A Beautiful Mind',
        Adventurous: 'The Social Network',
      },
      Long: {
        Happy: 'Forrest Gump',
        Relaxed: 'The Green Mile',
        Excited: 'Schindler’s List',
        Adventurous: 'The Shawshank Redemption',
      },
    },
    Horror: {
      Short: {
        Happy: 'Shaun of the Dead',
        Relaxed: 'The Babadook',
        Excited: 'A Quiet Place',
        Adventurous: 'The Cabin in the Woods',
      },
      Medium: {
        Happy: 'Zombieland',
        Relaxed: 'It Follows',
        Excited: 'The Conjuring',
        Adventurous: 'Insidious',
      },
      Long: {
        Happy: 'The Shining',
        Relaxed: 'Hereditary',
        Excited: 'Midsommar',
        Adventurous: 'Doctor Sleep',
      },
    },
    'Sci-Fi': {
      Short: {
        Happy: 'Moon',
        Relaxed: 'Ex Machina',
        Excited: 'Edge of Tomorrow',
        Adventurous: 'District 9',
      },
      Medium: {
        Happy: 'The Martian',
        Relaxed: 'Interstellar',
        Excited: 'Star Trek',
        Adventurous: 'Inception',
      },
      Long: {
        Happy: 'Avatar',
        Relaxed: '2001: A Space Odyssey',
        Excited: 'Blade Runner 2049',
        Adventurous: 'Dune',
      },
    },
  };

  const movie = movieSuggestions[genre][duration][mood];
  recommendation.textContent = `Based on your preferences, we recommend watching "${movie}". Enjoy!`;
});
