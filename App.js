import React, { useState, useEffect } from ‘react’;
import { BookOpen, Plus, Trash2, Calendar } from ‘lucide-react’;

export default function LearningJournal() {
const [entries, setEntries] = useState([]);
const [topic, setTopic] = useState(’’);
const [content, setContent] = useState(’’);
const [currentDate, setCurrentDate] = useState(’’);

useEffect(() => {
const date = new Date().toLocaleDateString(‘en-US’, {
weekday: ‘long’,
year: ‘numeric’,
month: ‘long’,
day: ‘numeric’
});
setCurrentDate(date);

```
// Pre-populated entries
const initialEntries = [
  {
    id: 1,
    topic: 'Testing Methods',
    content: 'Explored various testing methodologies including unit testing, integration testing, and end-to-end testing. Learned about test-driven development (TDD) and behavior-driven development (BDD). Understanding the importance of writing testable code and maintaining good test coverage to ensure software quality and reduce bugs in production.',
    timestamp: '9:00 AM'
  },
  {
    id: 2,
    topic: 'Levels of Testing',
    content: 'Studied the different levels of testing in software development: Unit Testing (testing individual components), Integration Testing (testing component interactions), System Testing (testing the complete system), and Acceptance Testing (validating against business requirements). Each level serves a specific purpose in the quality assurance process.',
    timestamp: '10:30 AM'
  },
  {
    id: 3,
    topic: 'Drawbacks of AI',
    content: 'Examined the limitations and challenges of artificial intelligence including bias in training data, lack of transparency in decision-making (black box problem), high computational costs, dependence on large datasets, inability to understand context like humans, job displacement concerns, and potential security vulnerabilities. Understanding these drawbacks is crucial for responsible AI implementation.',
    timestamp: '11:15 AM'
  },
  {
    id: 4,
    topic: 'Levels of Maintenance in Kanban',
    content: 'Learned about different maintenance levels in Kanban systems: Corrective Maintenance (fixing defects), Preventive Maintenance (avoiding future issues), Adaptive Maintenance (adjusting to environmental changes), and Perfective Maintenance (improving performance and functionality). Understanding how to visualize and prioritize maintenance work on Kanban boards helps optimize team workflow and system reliability.',
    timestamp: '1:00 PM'
  },
  {
    id: 5,
    topic: 'Defect Life Cycle',
    content: 'Studied the complete journey of a defect from discovery to closure: New (defect identified), Assigned (assigned to developer), Open (developer working on it), Fixed (solution implemented), Retest (QA verification), Verified (defect confirmed fixed), Closed (defect resolved), and Reopened (if issue persists). This lifecycle ensures systematic tracking and resolution of software bugs.',
    timestamp: '2:00 PM'
  },
  {
    id: 6,
    topic: 'Abstraction',
    content: 'Deepened understanding of Abstraction in OOP, which hides complex implementation details and shows only essential features. Learned about abstract classes and interfaces in Java that define what an object does without specifying how. Abstraction reduces complexity, improves code maintainability, and enables flexibility by separating interface from implementation.',
    timestamp: '2:45 PM'
  },
  {
    id: 7,
    topic: 'Encapsulation',
    content: 'Explored Encapsulation as the bundling of data and methods that operate on that data within a single unit (class). Using access modifiers (private, public, protected) to control data access, getters and setters for controlled data manipulation. Encapsulation protects data integrity, increases security, and makes code more modular and maintainable.',
    timestamp: '3:30 PM'
  },
  {
    id: 8,
    topic: 'Inheritance',
    content: 'Studied Inheritance mechanism where a class acquires properties and behaviors from a parent class. Learned about single inheritance, multilevel inheritance, and hierarchical inheritance in Java. Benefits include code reusability, establishing parent-child relationships, method overriding for polymorphism, and creating logical class hierarchies that model real-world relationships.',
    timestamp: '4:15 PM'
  },
  {
    id: 9,
    topic: 'Polymorphism',
    content: 'Explored Polymorphism allowing objects to take many forms. Learned about Compile-time Polymorphism (method overloading - same method name, different parameters) and Runtime Polymorphism (method overriding - subclass provides specific implementation). Polymorphism enables flexibility, extensibility, and cleaner code by allowing one interface to be used for different data types.',
    timestamp: '5:00 PM'
  }
];

setEntries(initialEntries);
```

}, []);

const addEntry = () => {
if (topic.trim()) {
const newEntry = {
id: Date.now(),
topic: topic,
content: content || `Today I learned about ${topic}. This is an important concept that helps me understand the subject better. I'll continue exploring this topic to deepen my knowledge.`,
timestamp: new Date().toLocaleTimeString(‘en-US’, {
hour: ‘2-digit’,
minute: ‘2-digit’
})
};
setEntries([newEntry, …entries]);
setTopic(’’);
setContent(’’);
}
};

const deleteEntry = (id) => {
setEntries(entries.filter(entry => entry.id !== id));
};

return (
<div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 p-6">
<div className="max-w-4xl mx-auto">
{/* Header */}
<header className="text-center text-white mb-10">
<div className="flex items-center justify-center gap-3 mb-3">
<BookOpen size={48} />
<h1 className="text-5xl font-bold">My Learning Journal</h1>
</div>
<div className="flex items-center justify-center gap-2 text-lg opacity-90">
<Calendar size={20} />
<p>{currentDate}</p>
</div>
</header>

```
    {/* Input Section */}
    <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Learning</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Topic Name *
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., React Hooks, Machine Learning, Spanish Verbs..."
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition"
            onKeyPress={(e) => e.key === 'Enter' && addEntry()}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            What You Learned (Optional)
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Describe what you learned... (leave empty for auto-generated content)"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none transition resize-none"
            rows="4"
          />
        </div>

        <button
          onClick={addEntry}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 transition transform"
        >
          <Plus size={20} />
          Add Entry
        </button>
      </div>
    </div>

    {/* Entries Section */}
    <div className="bg-white rounded-2xl shadow-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-4 border-purple-500 pb-3">
        Today's Learning ({entries.length})
      </h2>

      {entries.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <BookOpen size={64} className="mx-auto mb-4 opacity-30" />
          <p className="text-lg">No entries yet. Start logging what you've learned today!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="border-2 border-gray-100 rounded-xl p-6 hover:border-purple-300 transition bg-gradient-to-r from-purple-50 to-indigo-50"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-purple-700">{entry.topic}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">{entry.timestamp}</span>
                  <button
                    onClick={() => deleteEntry(entry.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-lg transition"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{entry.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
</div>
```

);
}
