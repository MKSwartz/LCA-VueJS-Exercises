import { ref, computed, onMounted } from "vue";

const STORAGE_KEY = "flexzone_sessions";

export function useSessions() {
  const sessions = ref([]);

  const loadSessions = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          sessions.value = parsed.map((s) => ({
            ...s,
            capacity: Number(s.capacity),
          }));
          return;
        }
      } catch (e) {
        console.warn(e);
      }
    }

    sessions.value = [
      {
        id: 1001,
        name: "Zen Sunrise Yoga",
        coach: "Jane Doe",
        date: "2025-03-20",
        time: "07:30",
        capacity: 18,
      },
      {
        id: 1002,
        name: "Intense Core Pilates",
        coach: "John Doe",
        date: "2025-03-20",
        time: "09:15",
        capacity: 12,
      },
      {
        id: 1003,
        name: "Spinning Class",
        coach: "Jo Doe",
        date: "2025-03-21",
        time: "17:45",
        capacity: 20,
      },
    ];
  };

  const saveToLocalStorage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions.value));
  };

  const addSession = (newSession) => {
    sessions.value = [...sessions.value, newSession];
    saveToLocalStorage();
  };

  const deleteSession = (sessionId) => {
    sessions.value = sessions.value.filter((s) => s.id !== sessionId);
    saveToLocalStorage();
  };

  const totalSessions = computed(() => sessions.value.length);

  onMounted(() => {
    loadSessions();
  });

  return {
    sessions,
    addSession,
    deleteSession,
    totalSessions,
  };
}
