document.getElementById('startQuestionnaire').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'block';
    showPage(1);
});

function showPage(pageNumber) {
    const pages = document.querySelectorAll('.question-page');
    pages.forEach((page, index) => {
        page.style.display = (index + 1 === pageNumber) ? 'block' : 'none';
    });
}

let currentPage = 1;
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('next-page')) {
        currentPage++;
        if (currentPage > 3) {
            generatePlaylist();
            return;
        }
        showPage(currentPage);
    }
});

function generatePlaylist() {
    const mood = document.querySelector('input[name="mood"]:checked').value;
    const purpose = document.querySelector('input[name="purpose"]:checked').value;
    const genre = document.querySelector('input[name="genre"]:checked').value;

    const playlists = {
        'happy': {
            'mood improvement': {
                'pop': 'happy_mood_pop_playlist_id',
                'jazz/classic': 'happy_mood_jazz_classic_playlist_id',
                'rock/alternative': 'happy_mood_rock_alternative_playlist_id',
                'ambient': 'happy_mood_ambient_playlist_id',
            },
            'emotional management': {
                'pop': 'happy_emotional_pop_playlist_id',
                'jazz/classic': 'happy_emotional_jazz_classic_playlist_id',
                'rock/alternative': 'happy_emotional_rock_alternative_playlist_id',
                'ambient': 'happy_emotional_ambient_playlist_id',
            },
            'relaxation and reduce stress': {
                'pop': 'happy_relaxation_pop_playlist_id',
                'jazz/classic': 'happy_relaxation_jazz_classic_playlist_id',
                'rock/alternative': 'happy_relaxation_rock_alternative_playlist_id',
                'ambient': 'happy_relaxation_ambient_playlist_id',
            },
        },
        'sad': {
            'mood improvement': {
                'pop': 'sad_mood_pop_playlist_id',
                'jazz/classic': 'sad_mood_jazz_classic_playlist_id',
                'rock/alternative': 'sad_mood_rock_alternative_playlist_id',
                'ambient': 'sad_mood_ambient_playlist_id',
            },
            'emotional management': {
                'pop': 'sad_emotional_pop_playlist_id',
                'jazz/classic': 'sad_emotional_jazz_classic_playlist_id',
                'rock/alternative': 'sad_emotional_rock_alternative_playlist_id',
                'ambient': 'sad_emotional_ambient_playlist_id',
            },
            'relaxation and reduce stress': {
                'pop': 'sad_relaxation_pop_playlist_id',
                'jazz/classic': 'sad_relaxation_jazz_classic_playlist_id',
                'rock/alternative': 'sad_relaxation_rock_alternative_playlist_id',
                'ambient': 'sad_relaxation_ambient_playlist_id',
            },
        },
        'angry': {
            'mood improvement': {
                'pop': 'angry_mood_pop_playlist_id',
                'jazz/classic': 'angry_mood_jazz_classic_playlist_id',
                'rock/alternative': 'https://open.spotify.com/playlist/2mnIxFvwfhCrADxcD4kMiF?si=76ef455c0cd14466&pt=85415653e7f025c16bcee48e778976b0',
                'ambient': 'angry_mood_ambient_playlist_id',
            },
            'emotional management': {
                'pop': 'angry_emotional_pop_playlist_id',
                'jazz/classic': 'angry_emotional_jazz_classic_playlist_id',
                'rock/alternative': 'angry_emotional_rock_alternative_playlist_id',
                'ambient': 'angry_emotional_ambient_playlist_id',
            },
            'relaxation and reduce stress': {
                'pop': 'angry_relaxation_pop_playlist_id',
                'jazz/classic': 'angry_relaxation_jazz_classic_playlist_id',
                'rock/alternative': 'angry_relaxation_rock_alternative_playlist_id',
                'ambient': 'angry_relaxation_ambient_playlist_id',
            },
        },
    };

    const playlistId = playlists[mood][purpose][genre];
    const playlistEmbed = `<iframe src="https://open.spotify.com/embed/playlist/${playlistId}" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`;

    document.getElementById('questionnaire').style.display = 'none';
    document.getElementById('playlist').style.display = 'block';
    document.getElementById('playlistContainer').innerHTML = playlistEmbed;
}
